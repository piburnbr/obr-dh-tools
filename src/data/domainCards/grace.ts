import { DomainCardInfo, GraceAbility, GraceCard } from "../../apps/Shared/Types";


export const GraceCardData:{[graceCard: number]: DomainCardInfo} = {
    [GraceCard.DEFT_DECEIVER]: {
        name: "Deft Deciever",
        id: GraceCard.DEFT_DECEIVER,
        abilities: [GraceAbility.DEFT_DECEIVER]
    },
    [GraceCard.ENRAPTURE]: {
        name: "Enrapture",
        id: GraceCard.ENRAPTURE,
        abilities: [GraceAbility.ENRAPTURE]
    },
    [GraceCard.INSPIRATIONAL_WORDS]: {
        name: "Inspirational Words",
        id: GraceCard.INSPIRATIONAL_WORDS,
        abilities: [GraceAbility.INSPIRATIONAL_WORDS]
    },
}