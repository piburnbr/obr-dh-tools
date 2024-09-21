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
}

