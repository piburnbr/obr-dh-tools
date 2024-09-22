import { DomainCardInfo, SageAbility, SageCard } from "../../apps/Shared/Types";


export const SageCardData:{[sageCard: number]: DomainCardInfo} = {
    [SageCard.GIFTED_TRACKER]: {
        name: "Gifted Tracker",
        id: SageCard.GIFTED_TRACKER,
        abilities: [SageAbility.GIFTED_TRACKER]
    },
    [SageCard.NATURES_TONGUE]: {
        name: "Nature's Tongue",
        id: SageCard.NATURES_TONGUE,
        abilities: [SageAbility.NATURES_TONGUE]
    },
    [SageCard.VICIOUS_ENTANGLE]: {
        name: "Viscious Entangle",
        id: SageCard.VICIOUS_ENTANGLE,
        abilities: [SageAbility.VICIOUS_ENTANGLE]
    },
}