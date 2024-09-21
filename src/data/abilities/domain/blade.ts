import { AbilityInfo, BladeAbility } from "../../../apps/Shared/Types";

export const bladeyAbilityData: {[ability: number]: AbilityInfo} = {
    [BladeAbility.RETALIATION]: {
        name: 'Retaliation',
        id: BladeAbility.RETALIATION,
        description: 'When you take damage from a creature in melee range, you may mark a Stress to immediately deal weapon damage to the creature at half Proficiency (rounded up).',
        costs: [{
            label: 'Mark 1 Stress',
            stress: 1,
        }]
    },
}

