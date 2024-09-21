import { Ability, CharacterMod, Clas } from "..";

export type ClasInfo = {
    name: string;
    id: Clas;
    subclases: any[];
    characterMods: CharacterMod;
    abilities: Ability[]
}