export enum Community {
    HIGHBORNE = 1,
    LOREBORNE = 2,
    ORDERBORNE = 3,
    RIDGEBORN = 4,
    SEABORNE = 5,
    SLYBORNE = 6,
    UNDERBORNE = 7,
    WANDERBORNE = 8,
    WILDBORNE = 9,
}

type CommunityInfo = {
    name: string,
}

export const communityData: {[Community: number]: CommunityInfo} = {
    [Community.HIGHBORNE]: {
        name: "Highborne",
    },
    [Community.LOREBORNE]: {
        name: "Loreborne",
    },
    [Community.ORDERBORNE]: {
        name: "Orderborne",
    },
    [Community.RIDGEBORN]: {
        name: "Ridgeborne",
    },
    [Community.SEABORNE]: {
        name: "Seaborne",
    },
    [Community.SLYBORNE]: {
        name: "Slyborne",
    },
    [Community.UNDERBORNE]: {
        name: "Underborne",
    },
    [Community.WANDERBORNE]: {
        name: "Wanderborne",
    },
    [Community.WILDBORNE]: {
        name: "Wildborne",
    },
}

export const getCommunityName = (community: Community) => {
    return communityData[community].name;
}

export const getCommunityOptions = () => {
    return Object.keys(communityData).map((community) => ({
        name: communityData[parseInt(community)].name,
        id: community,
    }));
}