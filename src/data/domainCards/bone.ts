import { BoneAbility, BoneCard, DomainCardInfo } from "../../apps/Shared/Types";

export const BoneCardData:{[boneCard: number]: DomainCardInfo} = {
    [BoneCard.DEFT_MANEUVERS]: {
        name: "Deft Maneuvers",
        id: BoneCard.DEFT_MANEUVERS,
        abilities: [BoneAbility.DEFT_MANEUVERS]
    }
}