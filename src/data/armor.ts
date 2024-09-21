import { Armor, ArmorFeature, ArmorFeatureInfo, ArmorInfo } from "../apps/Shared/Types";

export const armorFeatureData:{[armorFeature: number]: ArmorFeatureInfo} = {
    [ArmorFeature.FLEXIBLE]: {
        name: 'Flexible',
        desc: '+1 to Evasion',
    },
    [ArmorFeature.HEAVY]: {
        name: 'Heavy',
        desc: '-1 to Evasion',
    },
    [ArmorFeature.VERY_HEAVY]: {
        name: 'Very Heavy',
        desc: '-2 to Evasion and -1 to Agility',
    },
}

export const armorData: {[armor: number]: ArmorInfo} = {
    [Armor.GAMBESON_ARMOR]: {
        name: 'Gambeson Armor',
        id: Armor.GAMBESON_ARMOR,
        feature: ArmorFeature.FLEXIBLE,
        characterMods: {
            armorScore: 3,
        }
    },
    [Armor.LEATHER_ARMOR]: {
        name: 'Leather Armor',
        id: Armor.LEATHER_ARMOR,
        characterMods: {
            armorScore: 4,
        }
    },
    [Armor.CHAINMAIL_ARMOR]: {
        name: 'Chainmail Armor',
        id: Armor.CHAINMAIL_ARMOR,
        feature: ArmorFeature.HEAVY,
        characterMods: {
            armorScore: 5,
        }
    },
    [Armor.FULL_PLATE_ARMOR]: {
        name: 'Full Plate Armor',
        id: Armor.FULL_PLATE_ARMOR,
        feature: ArmorFeature.VERY_HEAVY,
        characterMods: {
            armorScore: 6,
        }
    },
}

export const getArmorName = (armor: Armor) => {
    return armorData[armor].name;
}

export const getArmorOptions = () => {
    return Object.keys(armorData).map((armor) => ({
        name: armorData[parseInt(armor)].name,
        id: armor,
    })).sort((a,b) => a.name.localeCompare(b.name))
}