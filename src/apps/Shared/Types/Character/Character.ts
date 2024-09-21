import { Ancestry, Armor, Clas, Community, DomainCard, Subclas, Weapon } from "..";

export type Character = {
    id: string;
    name: string;
    clas: Clas;
    subclas: Subclas;
    ancestry1: Ancestry;
    ancestry2: Ancestry;
    community: Community;
    level: number;

    proficiency: number;
    primaryWeapon?: Weapon;
    secondaryWeapon?: Weapon;

    armor?: Armor;
    
    marked: {
        hp: number;
        stress: number;
        armor: number;
        hope: number;
    }

    attr: {
        agility: number,
        strength: number,
        finesse: number,
        instinct: number,
        presence: number,
        knowledge: number,
    }

    abState: {[ability: number]: any};

    dC: DomainCard[];
    vault: DomainCard[];
}