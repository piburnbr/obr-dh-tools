import { BladeAbility, BladeCard, DomainCardInfo } from "../../apps/Shared/Types";


export const BladeCardData:{[bladeCard: number]: DomainCardInfo} = {
    [BladeCard.NOT_GOOD_ENOUGH]: {
        name: "Not Good Enough",
        id: BladeCard.NOT_GOOD_ENOUGH,
        abilities: [BladeAbility.NOT_GOOD_ENOUGH]
    },
    [BladeCard.RETALIATION]: {
        name: "Retaliation",
        id: BladeCard.RETALIATION,
        abilities: [BladeAbility.RETALIATION]
    },
    [BladeCard.WHIRLWIND]: {
        name: "Whirlwind",
        id: BladeCard.WHIRLWIND,
        abilities: [BladeAbility.WHIRLWIND]
    },
}