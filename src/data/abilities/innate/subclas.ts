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
    }
}

