import { AbilityInfo, SubclasAbility } from "../../../apps/Shared/Types";

export const subclasAbilityData: {[ability: number]: AbilityInfo} = {
    [SubclasAbility.STALWART]: {
        name: "Stalwart",
        id: SubclasAbility.STALWART,
        description: 'When you take this foundation, increase all of your Damage Thresholds by +1.\nWhen you take physical damage, always reduce it by your armor score before applying it to your thresholds. You can still spend armor slots to reduce it further.',
        characterMods: {
            majorThreshold: 1,
            severeThreshold: 1,
        }
    },
    [SubclasAbility.ELEMENTAL_ORIGIN]: {
        name: 'Elemental Origin',
        id: SubclasAbility.ELEMENTAL_ORIGIN,
        description: 'Your elemental origin lets you manipulate and shape a certain kind of element.\nYou can channel this element into unique, harmless effects. Additionally, you can spend a Hope and describe how your control over this element helps an action roll you\'re about to make, then add either +2 to the roll or +3 to the damage.',
        rollUpdates: [{
            label: '+2 to hit',
            diceToAdd: [{
                dieName: 'Mod',
                count: 2,
            }]
        }, {
            label: '+3 to damage',
            diceToAdd: [{
                dieName: 'Mod',
                count: 3,
            }]
        }],
        costs: [{
            label: 'Pay 1 Hope',
            hope: -1,
        }]
    },
    [SubclasAbility.SCHOOL_OF_KNOWLEDGE_1]: {
        name: 'School of Knowledge',
        id: SubclasAbility.SCHOOL_OF_KNOWLEDGE_1,
        description: 'You\'ve gained priceless knowledge through great study. You have advantage on all Knowledge Rolls to recall information. If this roll is about the magical nature of a creature or enchantment, gain a Hope even on a roll with Fear.',
        rollUpdates: [{
            label: '+Adv on Knowledge to recall information',
            diceToAdd: [{
                dieName: 'Adv',
                count: 1,
            }]
        }],
        costs: [{
            label: 'Gain 1 Hope',
            hope: 1,
        }]
    },
    [SubclasAbility.SCHOOL_OF_KNOWLEDGE_ADEPT]: {
        name: 'Adept',
        id: SubclasAbility.SCHOOL_OF_KNOWLEDGE_ADEPT,
        description: 'You can mark a Stress instead of spending a Hope to use an Experience on a roll. If you do, double the Experience modifier for that roll.',
        costs: [{
            label: 'Mark 1 Stress: Double Experience',
            stress: 1,
        }]
    }
}
