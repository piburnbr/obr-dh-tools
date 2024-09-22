import { CodexAbility, CodexCard, DomainCardInfo } from "../../apps/Shared/Types";

export const CodexCardData:{[codexCard: number]: DomainCardInfo} = {
    [CodexCard.BOOK_OF_AVA]: {
        name: "Book of Ava",
        id: CodexCard.BOOK_OF_AVA,
        abilities: [CodexAbility.POWER_PUSH, CodexAbility.TAVAS_ARMOR, CodexAbility.ICE_SPIKES],
    },
    [CodexCard.BOOK_OF_ILLIAT]: {
        name: "Book of Illiat",
        id: CodexCard.BOOK_OF_ILLIAT,
        abilities: [CodexAbility.SLUMBER, CodexAbility.ARCANE_BARRAGE, CodexAbility.TELEPATHY],
    },
    [CodexCard.BOOK_OF_TYFAR]: {
        name: "Book of Tyfar",
        id: CodexCard.BOOK_OF_TYFAR,
        abilities: [CodexAbility.WILD_FLAME, CodexAbility.MAGIC_HAND, CodexAbility.MYSTERIOUS_MIST],
    },
}