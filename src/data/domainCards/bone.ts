import { BoneAbility, BoneCard, DomainCardInfo } from "../../apps/Shared/Types";

export const BoneCardData:{[boneCard: number]: DomainCardInfo} = {
    [BoneCard.DEFT_MANEUVERS]: {
        name: "Deft Maneuvers",
        id: BoneCard.DEFT_MANEUVERS,
        abilities: [BoneAbility.DEFT_MANEUVERS]
    },
    [BoneCard.I_SEE_IT_COMING]: {
        name: "I See it Coming",
        id: BoneCard.I_SEE_IT_COMING,
        abilities: [BoneAbility.I_SEE_IT_COMING]
    },
    [BoneCard.UNTOUCHABLE]: {
        name: "Untouchable",
        id: BoneCard.UNTOUCHABLE,
        abilities: [BoneAbility.UNTOUCHABLE]
    },
}