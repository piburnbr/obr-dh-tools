import { Subclas, subclasData } from "./subclases";

export enum Clas {
    BARD = 1,
    DRUID = 2,
    GUARDIAN = 3,
    RANGER = 4,
    ROGUE = 5,
    SERAPH = 6,
    SORCERER = 7,
    WARRIOR = 8,
    WIZARD = 9,
}

type ClasInfo = {
    name: string;
    subclases: any[];
}

export const clasData: {[clas: number]: ClasInfo} = {
    [Clas.BARD]: {
        name: "Bard",
        subclases: [Subclas.TROUBADOUR, Subclas.WORDSMITH],
    },
    [Clas.DRUID]: {
        name: "Druid",
        subclases: [Subclas.WARDEN_OF_RENEWAL, Subclas.WARDEN_OF_THE_ELEMENTS],
    },
    [Clas.GUARDIAN]: {
        name: "Guardian",
        subclases: [Subclas.STALWART, Subclas.VENGEANCE],
    },
    [Clas.RANGER]: {
        name: "Ranger",
        subclases: [Subclas.BEASTBOUND, Subclas.WAYFINDER],
    },
    [Clas.ROGUE]: {
        name: "Rogue",
        subclases: [Subclas.NIGHTWALKER, Subclas.SYNDICATE],
    },
    [Clas.SERAPH]: {
        name: "Seraph",
        subclases: [Subclas.DIVINE_WIELDER, Subclas.WINGED_SENTINEL],
    },
    [Clas.SORCERER]: {
        name: "Sorcerer",
        subclases: [Subclas.ELEMENTAL_ORIGIN, Subclas.PRIMAL_ORIGIN],
    },
    [Clas.WARRIOR]: {
        name: "Warrior",
        subclases: [Subclas.CALL_OF_THE_BRAVE, Subclas.CALL_OF_THE_SLAYER],
    },
    [Clas.WIZARD]: {
        name: "Wizard",
        subclases: [Subclas.SCHOOL_OF_KNOWLEDGE, Subclas.SCHOOL_OF_WAR],
    },
}

export const getClasName = (clas: Clas) => {
    return clasData[clas].name
}

export const getClasOptions = () => {
    return Object.keys(clasData).map((clas) => ({
        name: clasData[parseInt(clas)].name,
        id: clas,
    }))
}

export const getSubclasOptions = (clas: Clas) => {
    return clasData[clas].subclases.map((subclas) => ({
        name: subclasData[subclas].name,
        id: subclas,
    }))
}