import { Subclas, SubclasAbility, SubclasInfo } from "../apps/Shared/Types";

export const subclasData: {[subclas: number]: SubclasInfo} = {
    [Subclas.BEASTBOUND]: {
        name: "Beastbound",
        id: Subclas.BEASTBOUND,
        spellcast: 'agility',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.CALL_OF_THE_BRAVE]: {
        name: "Call of the Brave",
        id: Subclas.CALL_OF_THE_BRAVE,
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.CALL_OF_THE_SLAYER]: {
        name: "Call of the Slayer",
        id: Subclas.CALL_OF_THE_SLAYER,
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.DIVINE_WIELDER]: {
        name: "Divine Wielder",
        id: Subclas.DIVINE_WIELDER,
        spellcast: 'strength',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.ELEMENTAL_ORIGIN]: {
        name: "Elemental Origin",
        id: Subclas.ELEMENTAL_ORIGIN,
        spellcast: 'instinct',
        foundation: [SubclasAbility.ELEMENTAL_ORIGIN],
        specialization: [],
        mastery: [],
    },
    [Subclas.NIGHTWALKER]: {
        name: "Nightwalker",
        id: Subclas.NIGHTWALKER,
        spellcast: 'finesse',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.PRIMAL_ORIGIN]: {
        name: "Primal Origin",
        id: Subclas.PRIMAL_ORIGIN,
        spellcast: 'instinct',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.SCHOOL_OF_KNOWLEDGE]: {
        name: "School of Knowledge",
        id: Subclas.SCHOOL_OF_KNOWLEDGE,
        spellcast: 'knowledge',
        foundation: [SubclasAbility.SCHOOL_OF_KNOWLEDGE_1, SubclasAbility.SCHOOL_OF_KNOWLEDGE_ADEPT],
        specialization: [],
        mastery: [],
    },
    [Subclas.SCHOOL_OF_WAR]: {
        name: "School of War",
        id: Subclas.SCHOOL_OF_WAR,
        spellcast: 'knowledge',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.STALWART]: {
        name: "Stalwart",
        id: Subclas.STALWART,
        foundation: [SubclasAbility.STALWART],
        specialization: [],
        mastery: [],
    },
    [Subclas.SYNDICATE]: {
        name: "Syndicate",
        id: Subclas.SYNDICATE,
        spellcast: 'finesse',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.TROUBADOUR]: {
        name: "Troubadour",
        id: Subclas.TROUBADOUR,
        spellcast: 'presence',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.VENGEANCE]: {
        name: "Vengeance",
        id: Subclas.VENGEANCE,
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.WARDEN_OF_RENEWAL]: {
        name: "Warden of Renewal",
        id: Subclas.WARDEN_OF_RENEWAL,
        spellcast: 'instinct',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.WARDEN_OF_THE_ELEMENTS]: {
        name: "Warden of the Elements",
        id: Subclas.WARDEN_OF_THE_ELEMENTS,
        spellcast: 'instinct',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.WAYFINDER]: {
        name: "Wayfinder",
        id: Subclas.WAYFINDER,
        spellcast: 'agility',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.WINGED_SENTINEL]: {
        name: "Winged Sentinel",
        id: Subclas.WINGED_SENTINEL,
        spellcast: 'strength',
        foundation: [],
        specialization: [],
        mastery: [],
    },
    [Subclas.WORDSMITH]: {
        name: "Wordsmith",
        id: Subclas.WORDSMITH,
        spellcast: 'presence',
        foundation: [],
        specialization: [],
        mastery: [],
    },
};

export const getSubclasName = (subclas: Subclas) => {
    return subclasData[subclas].name;
}