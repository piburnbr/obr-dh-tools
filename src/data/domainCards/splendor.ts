import { DomainCardInfo, SplendorAbility, SplendorCard } from "../../apps/Shared/Types";


export const SplendorCardData:{[splendorCard: number]: DomainCardInfo} = {
    [SplendorCard.BOLT_BEACON]: {
        name: "Bolt Beacon",
        id: SplendorCard.BOLT_BEACON,
        abilities: [SplendorAbility.BOLT_BEACON]
    }
}