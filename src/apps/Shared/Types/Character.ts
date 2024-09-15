import { Ancestry } from "../../../data/ancestries";
import { Clas } from "../../../data/clases";
import { Community } from "../../../data/communities";
import { Subclas } from "../../../data/subclases";

export type CharacterEntry = {
    id: string;
    name: string;
}

export type PipData = {
    marked: number;
    max: number;
}

export type Character = {
    id: string;
    name: string;
    clas: Clas;
    subclas: Subclas;
    ancestry1: Ancestry;
    ancestry2: Ancestry;
    community: Community;
    level: number;

    state: {
        hp: PipData;
        stress: PipData;
        armor: PipData;
        hope: PipData;
    }

    attr: {
        agility: number,
        strength: number,
        finesse: number,
        instinct: number,
        presence: number,
        knowledge: number,
    }
}