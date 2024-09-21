import { Clas, ClasAbility, ClasInfo, Subclas } from "../apps/Shared/Types";
import { subclasData } from "./subclases";

export const clasData: {[clas: number]: ClasInfo} = {
    [Clas.BARD]: {
        name: "Bard",
        id: Clas.BARD,
        subclases: [Subclas.TROUBADOUR, Subclas.WORDSMITH],
        characterMods: {
            evasion: 9,
            majorThreshold: 6,
            severeThreshold: 12,
        },
        abilities: [ClasAbility.BARDS_HOPE, ClasAbility.RALLY],
    },
    [Clas.DRUID]: {
        name: "Druid",
        id: Clas.DRUID,
        subclases: [Subclas.WARDEN_OF_RENEWAL, Subclas.WARDEN_OF_THE_ELEMENTS],
        characterMods: {
            evasion: 8,
            majorThreshold: 7,
            severeThreshold: 14,
        },
        abilities: [ClasAbility.DRUIDS_HOPE, ClasAbility.WILD_TOUCH, ClasAbility.BEAST_FORM],
    },
    [Clas.GUARDIAN]: {
        name: "Guardian",
        id: Clas.GUARDIAN,
        subclases: [Subclas.STALWART, Subclas.VENGEANCE],
        characterMods: {
            evasion: 8,
            majorThreshold: 8,
            severeThreshold: 16,
        },
        abilities: [ClasAbility.GUARDIANS_HOPE, ClasAbility.UNSTOPPABLE],
    },
    [Clas.RANGER]: {
        name: "Ranger",
        id: Clas.RANGER,
        subclases: [Subclas.BEASTBOUND, Subclas.WAYFINDER],
        characterMods: {
            evasion: 10,
            majorThreshold: 7,
            severeThreshold: 14,
        },
        abilities: [ClasAbility.RANGERS_HOPE, ClasAbility.RANGERS_FOCUS],
    },
    [Clas.ROGUE]: {
        name: "Rogue",
        id: Clas.ROGUE,
        subclases: [Subclas.NIGHTWALKER, Subclas.SYNDICATE],
        characterMods: {
            evasion: 11,
            majorThreshold: 6,
            severeThreshold: 12,
        },
        abilities: [ClasAbility.ROGUES_HOPE, ClasAbility.HIDE, ClasAbility.SNEAK_ATTACK],
    },
    [Clas.SERAPH]: {
        name: "Seraph",
        id: Clas.SERAPH,
        subclases: [Subclas.DIVINE_WIELDER, Subclas.WINGED_SENTINEL],
        characterMods: {
            evasion: 7,
            majorThreshold: 8,
            severeThreshold: 16,
        },
        abilities: [ClasAbility.SERAPHS_HOPE, ClasAbility.PRAYER_DICE],
    },
    [Clas.SORCERER]: {
        name: "Sorcerer",
        id: Clas.SORCERER,
        subclases: [Subclas.ELEMENTAL_ORIGIN, Subclas.PRIMAL_ORIGIN],
        characterMods: {
            evasion: 9,
            majorThreshold: 6,
            severeThreshold: 12,
        },
        abilities: [ClasAbility.SORCERERS_HOPE, ClasAbility.ARCANE_SENSE, ClasAbility.MINOR_ILLUSION],
    },
    [Clas.WARRIOR]: {
        name: "Warrior",
        id: Clas.WARRIOR,
        subclases: [Subclas.CALL_OF_THE_BRAVE, Subclas.CALL_OF_THE_SLAYER],
        characterMods: {
            evasion: 10,
            majorThreshold: 7,
            severeThreshold: 14,
        },
        abilities: [ClasAbility.WARRIORS_HOPE, ClasAbility.BATTLE_STRATEGIST, ClasAbility.ATTACK_OF_OPPORTUNITY],
    },
    [Clas.WIZARD]: {
        name: "Wizard",
        id: Clas.WIZARD,
        subclases: [Subclas.SCHOOL_OF_KNOWLEDGE, Subclas.SCHOOL_OF_WAR],
        characterMods: {
            evasion: 10,
            majorThreshold: 5,
            severeThreshold: 10,
        },
        abilities: [ClasAbility.WIZARDS_HOPE, ClasAbility.PRESTIDIGITATION, ClasAbility.STRANGE_PATTERNS],
    },
}

export const getClasOptions = () => {
    return Object.keys(clasData).map((clas) => (
        clasData[parseInt(clas)]))
}

export const getSubclasOptions = (clas: Clas) => {
    return clasData[clas].subclases.map((subclas) => (
        subclasData[subclas]
    ))
}