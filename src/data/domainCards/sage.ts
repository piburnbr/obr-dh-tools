import { DomainCardInfo, SageAbility, SageCard } from "../../apps/Shared/Types";


export const SageCardData:{[sageCard: number]: DomainCardInfo} = {
    [SageCard.GIFTED_TRACKER]: {
        name: "Gifted Tracker",
        id: SageCard.GIFTED_TRACKER,
        abilities: [SageAbility.GIFTED_TRACKER]
    }
}