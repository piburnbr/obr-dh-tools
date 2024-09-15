export enum Subclas {
    BEASTBOUND = 1,
    CALL_OF_THE_BRAVE = 2,
    CALL_OF_THE_SLAYER = 3,
    DIVINE_WIELDER = 4,
    ELEMENTAL_ORIGIN = 5,
    NIGHTWALKER = 6,
    PRIMAL_ORIGIN = 7,
    SCHOOL_OF_KNOWLEDGE = 8,
    SCHOOL_OF_WAR = 9,
    STALWART = 10,
    SYNDICATE = 11,
    TROUBADOUR = 12,
    VENGEANCE = 13,
    WARDEN_OF_RENEWAL = 14,
    WARDEN_OF_THE_ELEMENTS = 15,
    WAYFINDER = 16,
    WINGED_SENTINEL = 17,
    WORDSMITH = 18,
}

type SubclasInfo = {
    name: string;
}

export const subclasData: {[subclas: number]: SubclasInfo} = {
    [Subclas.BEASTBOUND]: {
        name: "Beastbound",
    },
    [Subclas.CALL_OF_THE_BRAVE]: {
        name: "Call of the Brave",
    },
    [Subclas.CALL_OF_THE_SLAYER]: {
        name: "Call of the Slayer",
    },
    [Subclas.DIVINE_WIELDER]: {
        name: "Divine Wielder",
    },
    [Subclas.ELEMENTAL_ORIGIN]: {
        name: "Elemental Origin",
    },
    [Subclas.NIGHTWALKER]: {
        name: "Nightwalker",
    },
    [Subclas.PRIMAL_ORIGIN]: {
        name: "Primal Origin",
    },
    [Subclas.SCHOOL_OF_KNOWLEDGE]: {
        name: "School of Knowledge",
    },
    [Subclas.SCHOOL_OF_WAR]: {
        name: "School of War",
    },
    [Subclas.STALWART]: {
        name: "Stalwart",
    },
    [Subclas.SYNDICATE]: {
        name: "Syndicate",
    },
    [Subclas.TROUBADOUR]: {
        name: "Troubadour",
    },
    [Subclas.VENGEANCE]: {
        name: "Vengeance",
    },
    [Subclas.WARDEN_OF_RENEWAL]: {
        name: "Warden of Renewal",
    },
    [Subclas.WARDEN_OF_THE_ELEMENTS]: {
        name: "Warden of the Elements",
    },
    [Subclas.WAYFINDER]: {
        name: "Wayfinder",
    },
    [Subclas.WINGED_SENTINEL]: {
        name: "Winged Sentinel",
    },
    [Subclas.WORDSMITH]: {
        name: "Wordsmith",
    },
};

export const getSubclasName = (subclas: Subclas) => {
    return subclasData[subclas].name;
}