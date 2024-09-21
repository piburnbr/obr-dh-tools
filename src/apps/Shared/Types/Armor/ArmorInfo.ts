import { Armor, ArmorFeature } from ".";
import { CharacterMod } from "..";

export type ArmorInfo = {
    name: string;
    id: Armor;
    characterMods: CharacterMod,
    feature?: ArmorFeature,
}