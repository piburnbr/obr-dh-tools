import { Ancestry, AncestryAbility, AncestryInfo } from "../apps/Shared/Types";

export const ancestryData: {[ancestry: number]: AncestryInfo} = {
    [Ancestry.CLANK]: {
        name: "Clank",
        id: Ancestry.CLANK,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.DRAKONA]: {
        name: "Drakona",
        id: Ancestry.DRAKONA,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.DWARF]: {
        name: "Dwarf",
        id: Ancestry.DWARF,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.ELF]: {
        name: "Elf",
        id: Ancestry.ELF,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.FAERIE]: {
        name: "Faerie",
        id: Ancestry.FAERIE,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.FAUN]: {
        name: "Faun",
        id: Ancestry.FAUN,
        primaryAbilities: [],
        secondaryAbilities: [AncestryAbility.KICK],
    },
    [Ancestry.FIRBOLG]: {
        name: "Firbolg",
        id: Ancestry.FIRBOLG,
        primaryAbilities: [AncestryAbility.NATURAL_CALM],
        secondaryAbilities: [],
    },
    [Ancestry.FUNGRIL]: {
        name: "Fungril",
        id: Ancestry.FUNGRIL,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.GALAPA]: {
        name: "Galapa",
        id: Ancestry.GALAPA,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.GIANT]: {
        name: "Giant",
        id: Ancestry.GIANT,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.GOBLIN]: {
        name: "Goblin",
        id: Ancestry.GOBLIN,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.HALFLING]: {
        name: "Halfling",
        id: Ancestry.HALFLING,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.HUMAN]: {
        name: "Human",
        id: Ancestry.HUMAN,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.INFERIS]: {
        name: "Inferis",
        id: Ancestry.INFERIS,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.KATARI]: {
        name: "Katari",
        id: Ancestry.KATARI,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.ORC]: {
        name: "Orc",
        id: Ancestry.ORC,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.RIBBET]: {
        name: "Ribbet",
        id: Ancestry.RIBBET,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
    [Ancestry.SIMIAH]: {
        name: "Simiah",
        id: Ancestry.SIMIAH,
        primaryAbilities: [],
        secondaryAbilities: [],
    },
}

export const getAncestryOptions = () => {
    return Object.keys(ancestryData).map((ancestry) => (
        ancestryData[parseInt(ancestry)]
    ))
}