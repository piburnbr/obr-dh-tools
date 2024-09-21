import { DomainCardInfo, ValorAbility, ValorCard } from "../../apps/Shared/Types";


export const ValorCardData:{[valorCard: number]: DomainCardInfo} = {
    [ValorCard.BARE_BONES]: {
        name: "Bare Bones",
        id: ValorCard.BARE_BONES,
        abilities: [ValorAbility.BARE_BONES]
    },
    [ValorCard.FORCEFUL_PUSH]: {
        name: "Foreceful Push",
        id: ValorCard.FORCEFUL_PUSH,
        abilities: [ValorAbility.FORCEFUL_PUSH]
    },
    [ValorCard.I_AM_YOUR_SHIELD]: {
        name: "I am your Shield",
        id: ValorCard.I_AM_YOUR_SHIELD,
        abilities: [ValorAbility.I_AM_YOUR_SHIELD]
    },
}