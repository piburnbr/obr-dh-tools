import { Community, CommunityAbility, CommunityInfo } from "../apps/Shared/Types";

export const communityData: {[Community: number]: CommunityInfo} = {
    [Community.HIGHBORNE]: {
        name: "Highborne",
        id: Community.HIGHBORNE,
        abilities: [],
    },
    [Community.LOREBORNE]: {
        name: "Loreborne",
        id: Community.LOREBORNE,
        abilities: [],
    },
    [Community.ORDERBORNE]: {
        name: "Orderborne",
        id: Community.ORDERBORNE,
        abilities: [],
    },
    [Community.RIDGEBORN]: {
        name: "Ridgeborne",
        id: Community.RIDGEBORN,
        abilities: [],
    },
    [Community.SEABORNE]: {
        name: "Seaborne",
        id: Community.SEABORNE,
        abilities: [],
    },
    [Community.SLYBORNE]: {
        name: "Slyborne",
        id: Community.SLYBORNE,
        abilities: [],
    },
    [Community.UNDERBORNE]: {
        name: "Underborne",
        id: Community.UNDERBORNE,
        abilities: [],
    },
    [Community.WANDERBORNE]: {
        name: "Wanderborne",
        id: Community.WANDERBORNE,
        abilities: [CommunityAbility.NOMADIC_PACK],
    },
    [Community.WILDBORNE]: {
        name: "Wildborne",
        id: Community.WILDBORNE,
        abilities: [CommunityAbility.LIGHTFOOT],
    },
}

export const getCommunityOptions = () => {
    return Object.keys(communityData).map((community) => (
        communityData[parseInt(community)]
    ));
}