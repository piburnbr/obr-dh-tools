import { CodexAbility, CodexCard, DomainCardInfo } from "../../apps/Shared/Types";

export const CodexCardData:{[codexCard: number]: DomainCardInfo} = {
    [CodexCard.BOOK_OF_AVA]: {
        name: "Book of Ava",
        id: CodexCard.BOOK_OF_AVA,
        abilities: [CodexAbility.POWER_PUSH, CodexAbility.TAVAS_ARMOR, CodexAbility.ICE_SPIKES],
    }
}