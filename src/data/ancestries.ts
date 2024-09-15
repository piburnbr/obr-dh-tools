export enum Ancestry {
    CLANK = 1,
    DRAKONA = 2,
    DWARF = 3,
    ELF = 4,
    FAERIE = 5,
    FAUN = 6,
    FIRBOLG = 7,
    FUNGRIL = 8,
    GALAPA = 9,
    GIANT = 10,
    GOBLIN = 11,
    HALFLING = 12,
    HUMAN = 13,
    INFERIS = 14,
    KATARI = 15,
    ORC = 16,
    RIBBET = 17,
    SIMIAH = 18,
};

type AncestryInfo = {
    name: string;
}

export const ancestryData: {[ancestry: number]: AncestryInfo} = {
    [Ancestry.CLANK]: {
        name: "Clank",
    },
    [Ancestry.DRAKONA]: {
        name: "Drakona",
    },
    [Ancestry.DWARF]: {
        name: "Dwarf",
    },
    [Ancestry.ELF]: {
        name: "Elf",
    },
    [Ancestry.FAERIE]: {
        name: "Faerie",
    },
    [Ancestry.FAUN]: {
        name: "Faun",
    },
    [Ancestry.FIRBOLG]: {
        name: "Firbolg",
    },
    [Ancestry.FUNGRIL]: {
        name: "Fungril",
    },
    [Ancestry.GALAPA]: {
        name: "Galapa",
    },
    [Ancestry.GIANT]: {
        name: "Giant",
    },
    [Ancestry.GOBLIN]: {
        name: "Goblin",
    },
    [Ancestry.HALFLING]: {
        name: "Halfling",
    },
    [Ancestry.HUMAN]: {
        name: "Human",
    },
    [Ancestry.INFERIS]: {
        name: "Inferis",
    },
    [Ancestry.KATARI]: {
        name: "Katari",
    },
    [Ancestry.ORC]: {
        name: "Orc",
    },
    [Ancestry.RIBBET]: {
        name: "Ribbet",
    },
    [Ancestry.SIMIAH]: {
        name: "Simiah",
    },
}

export const getAncestryName = (ancestry: Ancestry) => {
    return ancestryData[ancestry].name
}

export const getAncestryOptions = () => {
    return Object.keys(ancestryData).map((ancestry) => ({
        name: ancestryData[parseInt(ancestry)].name,
        id: ancestry,
    }))
}