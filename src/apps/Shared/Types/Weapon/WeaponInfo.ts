import { Attack, CharacterMod, Cost, Weapon, WeaponFeature } from "..";


export type WeaponInfo = {
    name: string;
    id: Weapon;
    type: 'primary' | 'secondary'
    attacks: Attack[];
    hands: 1 | 2;
    characterMods?: CharacterMod;
    costs?: Cost[];
    feature?: WeaponFeature;
}