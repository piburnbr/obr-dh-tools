import { ArcanaAbility, ArcanaCard, DomainCardInfo } from "../../apps/Shared/Types";

export const ArcanaCardData:{[arcanaCard: number]: DomainCardInfo} = {
    [ArcanaCard.RUNE_WARD]: {
        name: "Rune Ward",
        id: ArcanaCard.RUNE_WARD,
        abilities: [ArcanaAbility.RUNE_WARD]
    }
}