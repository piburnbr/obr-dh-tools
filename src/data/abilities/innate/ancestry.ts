import { AbilityInfo, AncestryAbility } from "../../../apps/Shared/Types";

export const ancestryAbilityData: {[ability: number]: AbilityInfo} = {
    [AncestryAbility.NATURAL_CALM] : {
        name: 'Natural Calm',
        id: AncestryAbility.NATURAL_CALM,
        description: 'Whenever you should mark a Stress, roll a d6. On a result of 6, don\'t mark it.',
        rolls: [{
            label: 'Ignore Stress',
            rollString: '1d6'
        }],
        costs: [{
            label: 'Refund 1 Stress',
            stress: -1,
        }]
    },
    [AncestryAbility.KICK] : {
        name: 'Kick',
        id: AncestryAbility.KICK,
        description: 'On a successful melee attack, you can mark a Stress to kick yourself off of the target, adding 2d6 to the damage and pushing either them or yourself out of Melee range.',
        rollUpdates: [{
            label: '+2d6 to melee damage',
            diceToAdd: [{
                dieName: '6',
                count: 2,
            }]
        }],
        costs: [{
            label: 'Mark 1 Stress',
            stress: 1,
        }]
    },
    [AncestryAbility.HIGH_STAMINA]: {
        name: 'High Stamina',
        id: AncestryAbility.HIGH_STAMINA,
        description: 'Take an additional Stress slot at character creation.',
        characterMods: {
            stressMax: 1,
        }
    },
    [AncestryAbility.ADAPTABILITY]: {
        name: 'Adaptability',
        id: AncestryAbility.ADAPTABILITY,
        description: 'When you fail a roll that utilized one of your Experiences, you can mark a Stress to reroll. You must take the new result.',
        costs: [{
            label: 'Mark 1 Stress: Reroll failed Experience',
            stress: 1,
        }]
    },
    [AncestryAbility.NIMBLE]: {
        name: 'Nimble',
        id: AncestryAbility.NIMBLE,
        description: 'Increase your Evasion by +1 at character creation.',
        characterMods: {
            evasion: 1,
        }
    },
    [AncestryAbility.NATURAL_CLIMBER]: {
        name: 'Natural Climber',
        id: AncestryAbility.NATURAL_CLIMBER,
        description: 'You have advantage on Agility Rolls that involve balancing and climbing.',
        rollUpdates: [{
            label: '+Adv on Agility to balance/climb',
            diceToAdd: [{
                dieName: 'Adv',
                count: 1,
            }]
        }]
    },
    [AncestryAbility.SCALES]: {
        name: 'Scales',
        id: AncestryAbility.SCALES,
        description: 'Your natural scales act as protection, increasing all damage thresholds by +1.',
        characterMods: {
            majorThreshold: 1,
            severeThreshold: 1,
        }
    },
    [AncestryAbility.ELEMENTAL_BREATH]: {
        name: 'Elemental Breath',
        id: AncestryAbility.ELEMENTAL_BREATH,
        description: 'Choose an element for your breath (ice, fire, electricity, etc.). You can use this breath against a target or group of targets within Very Close range, treating it as an Instinct weapon that deals d8 magic damage using your Proficiency.',
        rolls: [{
            label: 'to hit',
            rollString: '1dDual + 1' //TODO: Instinct
        }, {
            label: 'damage',
            rollString: '1d8' //TODO: proficiency
        }]
    }
}

