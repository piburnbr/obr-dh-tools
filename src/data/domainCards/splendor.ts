import { DomainCardInfo, SplendorAbility, SplendorCard } from "../../apps/Shared/Types";


export const SplendorCardData:{[splendorCard: number]: DomainCardInfo} = {
    [SplendorCard.BOLT_BEACON]: {
        name: "Bolt Beacon",
        id: SplendorCard.BOLT_BEACON,
        abilities: [SplendorAbility.BOLT_BEACON]
    },
    [SplendorCard.MENDING_TOUCH]: {
        name: "Mending Touch",
        id: SplendorCard.MENDING_TOUCH,
        abilities: [SplendorAbility.MENDING_TOUCH]
    },
    [SplendorCard.REASSURANCE]: {
        name: "Reassurance",
        id: SplendorCard.REASSURANCE,
        abilities: [SplendorAbility.REASSURANCE]
    },
}