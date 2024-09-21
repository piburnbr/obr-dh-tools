import { AbilityInfo, ValorAbility } from "../../../apps/Shared/Types";


export const valorAbilityData: {[ability: number]: AbilityInfo} = {
    [ValorAbility.I_AM_YOUR_SHIELD]: {
        name: 'I am your Shield',
        id: ValorAbility.I_AM_YOUR_SHIELD,
        description: 'When an ally very close to you is going to take damage, you may mark a stress to stand in its way and take the damage instead. Reduce the damage by a value equal to your Strength Trait. You may also reduce the damage by spending armor slots.',
        costs: [{
            label: 'Mark 1 Stress: Take hit (reduced)',
            stress: 1,
        }]
    },
}

