import { abilityData } from "../../../data/abilities/abilities";
import { ancestryData } from "../../../data/ancestries";
import { armorData } from "../../../data/armor";
import { clasData } from "../../../data/clases";
import { communityData } from "../../../data/communities";
import { subclasData } from "../../../data/subclases";
import { weaponData } from "../../../data/weapons";
import { Ability, CharacterMod } from "../Types";
import { Character } from "../Types/Character/Character";

export const getPrimaryWeapon = (char: Character) => {
    if (!char.primaryWeapon) return undefined;
    return weaponData[char.primaryWeapon];
}

export const getSecondaryWeapon = (char: Character) => {
    if (!char.secondaryWeapon) return undefined;
    return weaponData[char.secondaryWeapon];
}

export const getArmor = (char: Character) => {
    if (!char.armor) return undefined;
    return armorData[char.armor];
}

export const getClas = (char: Character) => {
    return clasData[char.clas];
}

export const getSubclas = (char: Character) => {
    return subclasData[char.subclas];
}

export const getAbility = (ability: Ability) => {
    return abilityData[ability];
}

export const getAncestry1 = (char: Character) => {
    return ancestryData[char.ancestry1];
}

export const getAncestry2 = (char: Character) => {
    return ancestryData[char.ancestry2];
}

export const getCommunity = (char: Character) => {
    return communityData[char.community];
}

export type StatSource = {
    name: string;
    value: number;
}

export type FinalStat = {
    total: number;
    sources: StatSource[];
}

type ModSource = {
    name: string;
    characterMods?: CharacterMod;
}

type StatWithBase = 'hpMax' | 'stressMax' | 'armorMax' | 'hopeMax' 

type StatWithoutBase = 'evasion' | 'majorThreshold' | 'severeThreshold' |  'armorScore' | 'primaryMeleeDamage'

export type StatAttribute = 'agility' | 'strength' | 'finesse' | 'presence' | 'instinct' | 'knowledge'

type ModdableStat = StatWithBase | StatWithoutBase | StatAttribute

const checkForMod = (final: FinalStat, stat: ModdableStat, ModSource?: ModSource, ) => {
    const value = ModSource?.characterMods?.[stat]
    if (value) {
        final.sources.push({
            name: ModSource.name,
            value: value
        });
        final.total += value
    }
}

const checkAllForMods = (final: FinalStat, stat: ModdableStat, char: Character) => {
    checkForMod(final, stat, getClas(char));
    checkForMod(final, stat, getSubclas(char));
    checkForMod(final, stat, getArmor(char));
    checkForMod(final, stat, getPrimaryWeapon(char));
    checkForMod(final, stat, getSecondaryWeapon(char));
    for (let ability of getClas(char).abilities)
        checkForMod(final, stat, getAbility(ability))
    for (let ability of getSubclas(char).foundation)
        checkForMod(final, stat, getAbility(ability))
    // TODO subclass ranks
    for (let ability of getAncestry1(char).primaryAbilities)
        checkForMod(final, stat, getAbility(ability))
    for (let ability of getAncestry2(char).secondaryAbilities)
        checkForMod(final, stat, getAbility(ability))
    for (let ability of getCommunity(char).abilities)
        checkForMod(final, stat, getAbility(ability))
}

export const getPipStat = (char:Character, stat: StatWithBase) => {
    const final: FinalStat = {
        total: 6,
        sources: [{
            name: 'base',
            value: 6,
        }],
    }
    checkAllForMods(final, stat, char)
    return final;
}

export const getStat = (char: Character, stat: StatWithoutBase) => {
    const final: FinalStat = {
        total: 0,
        sources: [],
    }
    checkAllForMods(final, stat, char)
    return final;
}

export const getAttribute = (char: Character, stat: StatAttribute) => {
    const final: FinalStat = {
        total: char.attr[stat],
        sources: [{
            name: 'base',
            value: char.attr[stat],
        }]
    }
    checkAllForMods(final, stat, char)
    return final;
}