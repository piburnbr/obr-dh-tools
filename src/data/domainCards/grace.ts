import { DomainCardInfo, GraceAbility, GraceCard } from "../../apps/Shared/Types";


export const GraceCardData:{[graceCard: number]: DomainCardInfo} = {
    [GraceCard.DEFT_DECEIVER]: {
        name: "Deft Deciever",
        id: GraceCard.DEFT_DECEIVER,
        abilities: [GraceAbility.DEFT_DECEIVER]
    }
}