import { AbilityInfo, SplendorAbility } from "../../../apps/Shared/Types";

export const splendorAbilityData: {[ability: number]: AbilityInfo} = {
    [SplendorAbility.MENDING_TOUCH]: {
        name: 'Mending Touch',
        id: SplendorAbility.MENDING_TOUCH,
        description: 'You lay your hands upon a creature and channel healing magic to help close their wounds. When you can take a few minutes to focus on the person you\'re helping, spend 2 Hope and heal a Hit Point or a Stress.\nOnce per long rest, when you spend this healing time learning something new about them or revealing something about yourself, the 2 Hope you spend heals 2 Hit Points or 2 Stress instead.',
        costs: [{
            label: 'Spend 2 Hope, heal 1 HP or Stress',
            hope: -2
        }],
        uses: {
            count: 1,
            per: 'Per Long Rest',
        },
        defaultState: {u: 0}
    }
}

