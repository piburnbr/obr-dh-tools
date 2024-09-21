import { DomainCardInfo, MidnightAbility, MidnightCard } from "../../apps/Shared/Types";


export const MidnightCardData:{[midnightCard: number]: DomainCardInfo} = {
    [MidnightCard.PICK_AND_PULL]: {
        name: "Pick and Pull",
        id: MidnightCard.PICK_AND_PULL,
        abilities: [MidnightAbility.PICK_AND_PULL]
    },
    [MidnightCard.RAIN_OF_BLADES]: {
        name: "Rain of Blades",
        id: MidnightCard.RAIN_OF_BLADES,
        abilities: [MidnightAbility.RAIN_OF_BLADES]
    },
}