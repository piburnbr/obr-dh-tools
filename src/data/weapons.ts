import { Weapon, WeaponFeature, WeaponFeatureInfo, WeaponInfo } from "../apps/Shared/Types";

export const weaponFeatureData:{[weaponFeature: number]: WeaponFeatureInfo} = {
    [WeaponFeature.BARRIER]: {
        name: 'Barrier',
        desc: 'Add +3 to your armor score, -2 to Evasion',
    },
    [WeaponFeature.CUMBERSOME]: {
        name: 'Cumbersome',
        desc: '-1 to Evasion',
    },
    [WeaponFeature.HEAVY]: {
        name: 'Heavy',
        desc: '-1 to Agility',
    },
    [WeaponFeature.HOOK]: {
        name: 'Hook',
        desc: 'On a successful attack, you may also pull the target into Melee with you',
    },
    [WeaponFeature.MASSIVE]: {
        name: 'Massive',
        desc: '-1 Agility, roll one extra damage die and drop the lowest',
    },
    [WeaponFeature.PAIRED2]: {
        name: 'Paired',
        desc: '+2 to Primary Weapon Damage in Melee',
    },
    [WeaponFeature.POWERFUL]: {
        name: 'Powerful',
        desc: 'Roll one extra damage die and drop the lowest',
    },
    [WeaponFeature.PROTECTIVE]: {
        name: 'Protective',
        desc: 'Add +1 to your armor score',
    },
    [WeaponFeature.QUICK]: {
        name: 'Quick',
        desc: 'When making an attack roll, mark a Stress to include an additional target in range',
    },
    [WeaponFeature.RELIABLE]: {
        name: 'Reliable',
        desc: '+1 to attack rolls with this weapon',
    },
    [WeaponFeature.VERSATILE]: {
        name: 'Versatile',
        desc: 'Multiple ranges',
    },
    [WeaponFeature.WHIPCRACK]: {
        name: 'Whipcrack',
        desc: 'Mark stress to scatter enemies in Melee into Close range',
    },
}

export const weaponData: {[weapon: number]: WeaponInfo} = {
    [Weapon.BROADSWORD]: {
        name: 'Broadsword',
        id: Weapon.BROADSWORD,
        type: 'primary',
        attacks: [{
            attackTrait: 'agility',
            range: 'Melee',
            damageDie: 'd8',
            damageType: 'Physical',
            attackBonus: 1,
        }],
        hands: 1,
        feature: WeaponFeature.RELIABLE,
    },
    [Weapon.LONGSWORD]: {
        name: 'Longsword',
        id: Weapon.LONGSWORD,
        type: 'primary',
        attacks: [{
            attackTrait: 'agility',
            range: 'Melee',
            damageDie: 'd8',
            damageBonus: 3,
            damageType: 'Physical',
        }],
        hands: 2,
    },
    [Weapon.MACE]: {
        name: 'Mace',
        id: Weapon.MACE,
        type: 'primary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd8',
            damageBonus: 1,
            damageType: 'Physical',
        }],
        hands: 1,
    },
    [Weapon.BATTLEAXE]: {
        name: 'Battleaxe',
        id: Weapon.BATTLEAXE,
        type: 'primary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd10',
            damageBonus: 3,
            damageType: 'Physical',
        }],
        hands: 2,
    },
    [Weapon.GREATSWORD]: {
        name: 'Greatsword',
        id: Weapon.GREATSWORD,
        type: 'primary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd10',
            damageBonus: 3,
            damageType: 'Physical',
            dropLowest: true,
        }],
        hands: 2,
        feature: WeaponFeature.MASSIVE,
        characterMods: {
            agility: -1,
        }
    },
    [Weapon.WARHAMMER]: {
        name: 'Warhammer',
        id: Weapon.WARHAMMER,
        type: 'primary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd12',
            damageBonus: 3,
            damageType: 'Physical',
        }],
        hands: 2,
        feature: WeaponFeature.HEAVY,
        characterMods: {
            agility: -1
        }
    },
    [Weapon.DAGGER]: {
        name: 'Dagger',
        id: Weapon.DAGGER,
        type: 'primary',
        attacks: [{
            attackTrait: 'finesse',
            range: 'Melee',
            damageDie: 'd8',
            damageBonus: 1,
            damageType: 'Physical',
        }],
        hands: 1,
    },
    [Weapon.QUARTERSTAFF]: {
        name: 'Quarterstaff',
        id: Weapon.QUARTERSTAFF,
        type: 'primary',
        attacks: [{
            attackTrait: 'instinct',
            range: 'Melee',
            damageDie: 'd10',
            damageBonus: 3,
            damageType: 'Physical',
        }],
        hands: 2,
    },
    [Weapon.CUTLASS]: {
        name: 'Cutlass',
        id: Weapon.CUTLASS,
        type: 'primary',
        attacks: [{
            attackTrait: 'presence',
            range: 'Melee',
            damageDie: 'd8',
            damageBonus: 1,
            damageType: 'Physical',
        }],
        hands: 1,
    },
    [Weapon.RAPIER]: {
        name: 'Rapier',
        id: Weapon.RAPIER,
        type: 'primary',
        attacks: [{
            attackTrait: 'presence',
            range: 'Melee',
            damageDie: 'd8',
            damageType: 'Physical',
        }],
        hands: 1,
        feature: WeaponFeature.QUICK,
        costs: [{
            label: '1 Stress: Second Target',
            stress: 1,
        }]
    },
    [Weapon.HALBERD]: {
        name: 'Halberd',
        id: Weapon.HALBERD,
        type: 'primary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Very Close',
            damageDie: 'd8',
            damageBonus: 2,
            damageType: 'Physical',
        }],
        hands: 2,
    },
    [Weapon.SPEAR]: {
        name: 'Spear',
        id: Weapon.SPEAR,
        type: 'primary',
        attacks: [{
            attackTrait: 'finesse',
            range: 'Very Close',
            damageDie: 'd8',
            damageBonus: 2,
            damageType: 'Physical',
        }],
        hands: 2,
    },
    [Weapon.SHORTBOW]: {
        name: 'Shortbow',
        id: Weapon.SHORTBOW,
        type: 'primary',
        attacks: [{
            attackTrait: 'agility',
            range: 'Far',
            damageDie: 'd6',
            damageBonus: 2,
            damageType: 'Physical',
        }],
        hands: 2,
    },
    [Weapon.CROSSBOW]: {
        name: 'Crossbow',
        id: Weapon.CROSSBOW,
        type: 'primary',
        attacks: [{
            attackTrait: 'finesse',
            range: 'Far',
            damageDie: 'd6',
            damageBonus: 1,
            damageType: 'Physical',
        }],
        hands: 1,
    },
    [Weapon.LONGBOW]: {
        name: 'Longbow',
        id: Weapon.LONGBOW,
        type: 'primary',
        attacks: [{
            attackTrait: 'agility',
            range: 'Very Far',
            damageDie: 'd6',
            damageBonus: 3,
            damageType: 'Physical',
        }],
        hands: 2,
    },
    [Weapon.HALLOWED_AXE]: {
        name: 'Hallowed Axe',
        id: Weapon.HALLOWED_AXE,
        type: 'primary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd10',
            damageBonus: 1,
            damageType: 'Magic',
        }],
        hands: 1,
    },
    [Weapon.ARCANE_GAUNTLETS]: {
        name: 'Arcane Gauntlets',
        id: Weapon.ARCANE_GAUNTLETS,
        type: 'primary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd10',
            damageBonus: 3,
            damageType: 'Magic',
        }],
        hands: 2,
    },
    [Weapon.GLOWING_RINGS]: {
        name: 'Glowing Rings',
        id: Weapon.GLOWING_RINGS,
        type: 'primary',
        attacks: [{
            attackTrait: 'agility',
            range: 'Very Close',
            damageDie: 'd10',
            damageBonus: 2,
            damageType: 'Magic',
        }],
        hands: 2,
    },
    [Weapon.HAND_RUNES]: {
        name: 'Hand Runes',
        id: Weapon.HAND_RUNES,
        type: 'primary',
        attacks: [{
            attackTrait: 'instinct',
            range: 'Very Close',
            damageDie: 'd10',
            damageType: 'Magic',
        }],
        hands: 1,
    },
    [Weapon.RETURNING_BLADE]: {
        name: 'Returning Blade',
        id: Weapon.RETURNING_BLADE,
        type: 'primary',
        attacks: [{
            attackTrait: 'finesse',
            range: 'Close',
            damageDie: 'd8',
            damageBonus: 1,
            damageType: 'Magic',
        }],
        hands: 1,
    },
    [Weapon.SHORTSTAFF]: {
        name: 'Shortstaff',
        id: Weapon.SHORTSTAFF,
        type: 'primary',
        attacks: [{
            attackTrait: 'instinct',
            range: 'Close',
            damageDie: 'd8',
            damageBonus: 1,
            damageType: 'Magic',
        }],
        hands: 1,
    },
    [Weapon.DUALSTAFF]: {
        name: 'Dualstaff',
        id: Weapon.DUALSTAFF,
        type: 'primary',
        attacks: [{
            attackTrait: 'instinct',
            range: 'Far',
            damageDie: 'd6',
            damageBonus: 3,
            damageType: 'Magic',
        }],
        hands: 2,
    },
    [Weapon.SCEPTER]: {
        name: 'Scepter',
        id: Weapon.SCEPTER,
        type: 'primary',
        attacks: [{
            attackTrait: 'presence',
            range: 'Melee',
            damageDie: 'd10',
            damageType: 'Magic',
        }, {
            attackTrait: 'presence',
            range: 'Far',
            damageDie: 'd6',
            damageType: 'Magic',
        }],
        hands: 2,
        feature: WeaponFeature.VERSATILE,
    },
    [Weapon.WAND]: {
        name: 'Wand',
        id: Weapon.WAND,
        type: 'primary',
        attacks: [{
            attackTrait: 'knowledge',
            range: 'Far',
            damageDie: 'd6',
            damageBonus: 1,
            damageType: 'Magic',
        }],
        hands: 1,
    },
    [Weapon.GREATSTAFF]: {
        name: 'Greatstaff',
        id: Weapon.GREATSTAFF,
        type: 'primary',
        attacks: [{
            attackTrait: 'knowledge',
            range: 'Very Far',
            damageDie: 'd6',
            damageType: 'Magic',
            dropLowest: true,
        }],
        hands: 2,
        feature: WeaponFeature.POWERFUL,
    },
    [Weapon.SHORTSWORD]: {
        name: 'Shortsword',
        id: Weapon.SHORTSWORD,
        type: 'secondary',
        attacks: [{
            attackTrait: 'agility',
            range: 'Melee',
            damageDie: 'd8',
            damageType: 'Physical',
        }],
        hands: 1,
        feature: WeaponFeature.PAIRED2,
        characterMods: {
            primaryMeleeDamage: 2,
        }
    },
    [Weapon.ROUND_SHIELD]: {
        name: 'Round Shield',
        id: Weapon.ROUND_SHIELD,
        type: 'secondary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd4',
            damageType: 'Physical',
        }],
        hands: 1,
        feature: WeaponFeature.PROTECTIVE,
        characterMods: {
            armorScore: 1
        }
    },
    [Weapon.TOWER_SHIELD]: {
        name: 'Tower Shield',
        id: Weapon.TOWER_SHIELD,
        type: 'secondary',
        attacks: [{
            attackTrait: 'strength',
            range: 'Melee',
            damageDie: 'd6',
            damageType: 'Physical',
        }],
        hands: 1,
        feature: WeaponFeature.BARRIER,
        characterMods: {
            armorScore: 3,
            evasion: -2,
        }
    },
    [Weapon.SMALL_DAGGER]: {
        name: 'Small Dagger',
        id: Weapon.SMALL_DAGGER,
        type: 'secondary',
        attacks: [{
            attackTrait: 'finesse',
            range: 'Melee',
            damageDie: 'd8',
            damageType: 'Physical',
        }],
        hands: 1,
        feature: WeaponFeature.PAIRED2,
        characterMods: {
            primaryMeleeDamage: 2,
        }
    },
    [Weapon.WHIP]: {
        name: 'Whip',
        id: Weapon.WHIP,
        type: 'secondary',
        attacks: [{
            attackTrait: 'presence',
            range: 'Very Close',
            damageDie: 'd6',
            damageType: 'Physical',
        }],
        hands: 1,
        feature: WeaponFeature.WHIPCRACK,
        costs: [{
            label: 'Mark 1 Stress: Scatter enemies in Melee',
            stress: 1,
        }]
    },
    [Weapon.GRAPPLER]: {
        name: 'Grappler',
        id: Weapon.GRAPPLER,
        type: 'secondary',
        attacks: [{
            attackTrait: 'finesse',
            range: 'Close',
            damageDie: 'd6',
            damageType: 'Physical',
        }],
        hands: 1,
        feature: WeaponFeature.HOOK,
    },
    [Weapon.HAND_CROSSBOW]: {
        name: 'Hand Crossbow',
        id: Weapon.HAND_CROSSBOW,
        type: 'secondary',
        attacks: [{
            attackTrait: 'finesse',
            range: 'Far',
            damageDie: 'd6',
            damageType: 'Physical',
        }],
        hands: 1,
    },
};

export const getWeaponName = (weapon: Weapon) => {
    return weaponData[weapon].name;
}

export const getWeaponOptions = () => {
    return Object.keys(weaponData).map((weapon) => ({
        name: weaponData[parseInt(weapon)].name,
        id: weapon,
        type: weaponData[parseInt(weapon)].type,
    })).sort((a,b) => a.name.localeCompare(b.name))
}