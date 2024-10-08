import { ClassStateStrangePatterns, ClasStateUnstoppable } from "../../../apps/Shared/Types/AbilityState/Innate/clas";
import { AbilityInfo, ClasAbility } from "../../../apps/Shared/Types";

export const clasAbilityData: {[ability: number]: AbilityInfo} = {
    [ClasAbility.BARDS_HOPE]: {
        name: 'Bard\'s Hope',
        id: ClasAbility.BARDS_HOPE,
        description: '',
        costs: [{
            label: '',
            hope: -3,
        }]
    },
    [ClasAbility.DRUIDS_HOPE]: {
        name: 'Druid\'s Hope',
        id: ClasAbility.DRUIDS_HOPE,
        description: '',
        costs: [{
            label: '',
            hope: -3,
        }]
    },
    [ClasAbility.GUARDIANS_HOPE]: {
        name: 'Guardian\'s Hope',
        id: ClasAbility.GUARDIANS_HOPE,
        description: 'Spend three Hope to clear up to three armor slots.',
        costs: [{
            label: 'Pay 3 Hope, Clear 3 Armor',
            hope: -3,
            armor: -3,
        }],
    },
    [ClasAbility.RANGERS_HOPE]: {
        name: 'Ranger\'s Hope',
        id: ClasAbility.RANGERS_HOPE,
        description: '',
        costs: [{
            label: '',
            hope: -3,
        }]
    },
    [ClasAbility.ROGUES_HOPE]: {
        name: 'Rogue\'s Hope',
        id: ClasAbility.ROGUES_HOPE,
        description: '',
        costs: [{
            label: '',
            hope: -3,
        }]
    },
    [ClasAbility.SERAPHS_HOPE]: {
        name: 'Seraph\'s Hope',
        id: ClasAbility.SERAPHS_HOPE,
        description: 'Spend three Hope and either reroll a Prayer Die or refresh one of your used Prayer Dice.',
        costs: [{
            label: 'Spend 3 Hope, reroll or refresh a Prayer Die',
            hope: -3,
        }]
    },
    [ClasAbility.SORCERERS_HOPE]: {
        name: 'Sorcerer\'s Hope',
        id: ClasAbility.SORCERERS_HOPE,
        description: 'Spend three Hope after a Spellcast Roll to double the result of your Hope die.',
        costs: [{
            label: 'Pay 3 Hope, Double spellcast\'s Hope die',
            hope: -3,
        }]
    },
    [ClasAbility.WARRIORS_HOPE]: {
        name: 'Warrior\'s Hope',
        id: ClasAbility.WARRIORS_HOPE,
        description: '',
        costs: [{
            label: '',
            hope: -3,
        }]
    },
    [ClasAbility.WIZARDS_HOPE]: {
        name: 'Wizard\'s Hope',
        id: ClasAbility.WIZARDS_HOPE,
        description: 'Spend three Hope instead of marking your last Hit Point.',
        costs: [{
            label: 'Spend 3 Hope, Keep last hit point',
            hope: -3,
        }]
    },
    [ClasAbility.RALLY]: {
        name: 'Rally',
        id: ClasAbility.RALLY,
        description: '',
    },
    [ClasAbility.WILD_TOUCH]: {
        name: 'Wild Touch',
        id: ClasAbility.WILD_TOUCH,
        description: '',
    },
    [ClasAbility.BEAST_FORM]: {
        name: 'Beast Form',
        id: ClasAbility.BEAST_FORM,
        description: '',
    },
    [ClasAbility.UNSTOPPABLE]: {
        name: "Unstoppable",
        id: ClasAbility.UNSTOPPABLE,
        description: 'Once per Long Rest, you can choose to become Unstoppable. You gain an Unstoppable die, which begins as a d4. Place it on the spot to the right, starting with the “1” value facing up. Whenever you deal one or more hit points to an adversary, increase the Unstoppable die value by one. When you increase the value above the die’s highest number or when the scene ends, remove the die and drop out of Unstoppable. At Level 3, upgrade your Unstoppable die to a d6. At Level 7, upgrade it to a d8.\nWhile Unstoppable you:\n- Gain resistance to physical damage.\n- Increase your current Armor Score by your Proficiency.\n- Add the current value of your Unstoppable die to your damage dice total.\n- Cannot be Restrained or Vulnerable.',
        uses: {
            count: 1,
            per: 'Per Long Rest',
        },
        defaultState: {
            v: 0,
            u: 0,
        },
        customButtons: [{
            label: 'Activate / +1',
            handler: (c, s: ClasStateUnstoppable) => {
                const max = [0,4,4,6,6,6,6,8,8,8,8][c.level]
                if (!s.v) return {...s, v: 1}
                else if (s.v < max) return {...s, v: s.v+1}
                else return {...s, v: 0}
            },
        }],
        getCharacterMod: (c) => {
            const s = c.abState[ClasAbility.UNSTOPPABLE]
            return s && s.v ? {
                armorScore: c.proficiency,
            } : {}
        }
    },
    [ClasAbility.RANGERS_FOCUS]: {
        name: 'Ranger\'s Focus',
        id: ClasAbility.RANGERS_FOCUS,
        description: '',
    },
    [ClasAbility.HIDE]: {
        name: 'Hide',
        id: ClasAbility.HIDE,
        description: '',
    },
    [ClasAbility.SNEAK_ATTACK]: {
        name: 'Sneak Attack',
        id: ClasAbility.SNEAK_ATTACK,
        description: '',
    },
    [ClasAbility.PRAYER_DICE]: {
        name: 'Prayer Dice',
        id: ClasAbility.PRAYER_DICE,
        description: 'At the beginning of each session, roll a number of d4 dice equal to your Spellcast trait and store them to the right. You can spend one or more of these dice at any time to aid yourself or an ally within Far range. You can use the spent die\'s value to reduce any incoming damage, add to any roll result after the roll. Additionally, you can instead exchange the value for that many Hope you can give to any PC in range. Clear these dice at the end of each session.',
        uses: {
            count: 2, //TODO: spellcast trait
            per: 'Per Session',
        },
        defaultState: {u: 0},
        rolls: [{
            label: 'Prayer Die',
            rollString: '1d4',
        }]
    },
    [ClasAbility.ARCANE_SENSE]: {
        name: 'Arcane Sense',
        id: ClasAbility.ARCANE_SENSE,
        description: 'You can sense the presence of magical people and objects when you\'re close to them.',
    },
    [ClasAbility.MINOR_ILLUSION]: {
        name: 'Minor Illusion',
        id: ClasAbility.MINOR_ILLUSION,
        description: 'Make a Spellcast Roll (10). On a success, you create a minor visual illusion no larger than yourself within close Range. This illusion is convincing to anyone in Far range or further.',
        rolls: [{
            label: 'Spellcast DC 10',
            rollString: '1dDual + 2', //TODO: Spellcast
        }]
    },
    [ClasAbility.BATTLE_STRATEGIST]: {
        name: 'Battle Strategist',
        id: ClasAbility.BATTLE_STRATEGIST,
        description: '',
    },
    [ClasAbility.ATTACK_OF_OPPORTUNITY]: {
        name: 'Attack of Opportunity',
        id: ClasAbility.ATTACK_OF_OPPORTUNITY,
        description: '',
    },
    [ClasAbility.PRESTIDIGITATION]: {
        name: 'Prestidigitation',
        id: ClasAbility.PRESTIDIGITATION,
        description: 'You can perform harmless, subtle magical effects at will. For example, you might change an object\'s color, create a smell, light a candle, cause a tiny object to float, illuminate a room, or repair a small object.',
    },
    [ClasAbility.STRANGE_PATTERNS]: {
        name: 'Strange Patterns',
        id: ClasAbility.STRANGE_PATTERNS,
        description: 'Choose a number between 1 and 12. Whenever you roll that number on a Duality die, gain a Hope or clear a Stress. You can change this number when you finish a long rest.',
        costs: [{
            label: 'Gain 1 Hope',
            hope: 1,
        }, {
            label: 'Clear 1 Stress',
            stress: -1,
        }],
        defaultState: {
            v: 1
        },
        customButtons: [{
            label: 'Cycle +1',
            handler: (_, s: ClassStateStrangePatterns) => {
                const max = 12
                if (!s.v) return {...s, v: 1}
                else if (s.v < max) return {...s, v: s.v+1}
                else return {...s, v: 1}
            },
        }],
    },
}

