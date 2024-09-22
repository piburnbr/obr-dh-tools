import { AbilityInfo, MidnightAbility } from "../../../apps/Shared/Types";

export const midnightAbilityData: {[ability: number]: AbilityInfo} = {
    [MidnightAbility.RAIN_OF_BLADES]: {
        name: 'Rain of Blades',
        id: MidnightAbility.RAIN_OF_BLADES,
        description: 'Spend a Hope to conjure throwing blades that strike any enemies very close to you. Make a Spellcast Roll and all targets that you succeed against take d8+2 magic damage using your proficiency. If any targets you hit are currently Vulnerable, they take an additional 1d8 magic damage.',
        rolls: [{
            label: 'to hit',
            rollString: '1dDual + 2' //TODO: Spellcast
        }, {
            label: 'damage',
            rollString: '1d8 + 2' //TODO: Proficiency
        }],
        rollUpdates: [{
            label: '+d8: Vulnerable',
            diceToAdd: [{
                dieName: 'd8',
                count: 1,
            }]
        }],
        costs: [{
            label: 'Pay 1 Hope',
            hope: -1,
        }]
    },
}

