import { ArcanaAbility, ArcanaCard, DomainCardInfo } from "../../apps/Shared/Types";

export const ArcanaCardData:{[arcanaCard: number]: DomainCardInfo} = {
    [ArcanaCard.RUNE_WARD]: {
        name: "Rune Ward",
        id: ArcanaCard.RUNE_WARD,
        abilities: [ArcanaAbility.RUNE_WARD]
    },
    [ArcanaCard.UNLEASH_CHAOS]: {
        name: "Unleash Chaos",
        id: ArcanaCard.UNLEASH_CHAOS,
        abilities: [ArcanaAbility.UNLEASH_CHAOS]
    },
    [ArcanaCard.WALL_WALK]: {
        name: "Wall Walk",
        id: ArcanaCard.WALL_WALK,
        abilities: [ArcanaAbility.WALL_WALK]
    },
}