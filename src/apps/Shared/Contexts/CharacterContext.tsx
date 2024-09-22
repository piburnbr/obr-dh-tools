import React, { PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import OBR, { buildShape, Vector2, type Shape, Image} from '@owlbear-rodeo/sdk';

import { Character } from '../Types/Character/Character';
import { useRoomContext } from './RoomContext';
import { getPipStat, getStat, getAttribute } from '../Utils/statUtils';
import { abilityData } from '../../../data/abilities/abilities';
import { clasData } from '../../../data/clases';
import { subclasData } from '../../../data/subclases';
import { ancestryData } from '../../../data/ancestries';
import { communityData } from '../../../data/communities';
import { weaponData } from '../../../data/weapons';
import { armorData } from '../../../data/armor';
import { AbilityInfo, AncestryInfo, ArmorInfo, ClasInfo, CommunityInfo, Cost, DomainCardInfo, Experience, SubclasInfo, WeaponInfo } from '../Types';
import { DomainCardData } from '../../../data/domainCards';

type CharacterContextProps = {
    myCharacter?: Character,
    maxHp: number,
    maxStress: number,
    maxArmor: number,
    maxHope: number,
    evasion: number,
    majorThreshold: number,
    severeThreshold: number,
    armorScore: number,
    primaryMeleeDamage: number,
    attrs: {
        agility: number;
        strength: number;
        finesse: number;
        instinct: number;
        presence: number;
        knowledge: number;
    };
    experiences?: Experience[];
    name: string;
    clas?: ClasInfo;
    subclas?: SubclasInfo;
    ancestry1?: AncestryInfo;
    ancestry2?: AncestryInfo;
    community?: CommunityInfo;
    domainCards?: DomainCardInfo[];
    primaryWeapon?: WeaponInfo;
    secondaryWeapon?: WeaponInfo;
    armor?: ArmorInfo;
    abilities: AbilityInfo[];
    abilityState: {[ability: number]: any}
    payCost: (cost: Cost) => void;
    pickCharacter: (character?: Character) => void;
}

export const CharacterContext = React.createContext<CharacterContextProps>({
    myCharacter: undefined,
    maxHp: 0,
    maxStress: 0,
    maxArmor: 0,
    maxHope: 0,
    evasion: 0,
    majorThreshold: 0,
    severeThreshold: 0,
    armorScore: 0,
    primaryMeleeDamage: 0,
    attrs: {
        agility: 0,
        strength: 0,
        finesse: 0,
        instinct: 0,
        presence: 0,
        knowledge: 0,
    },
    experiences: undefined,
    name: '',
    clas: undefined,
    subclas: undefined,
    ancestry1: undefined,
    ancestry2: undefined,
    community: undefined,
    domainCards: [],
    primaryWeapon: undefined,
    secondaryWeapon: undefined,
    armor: undefined,
    abilities: [],
    abilityState: {},
    payCost: () => {},
    pickCharacter: () => {},
});

export const CharacterProvider:React.FunctionComponent<PropsWithChildren> = ({children}: PropsWithChildren) => {
    const { characters, updateCharacter } = useRoomContext();
    const [myCharacterId, setMyCharacterId] = useState('')

    const myCharacter = useMemo((): Character | undefined => {
        const me: Character | undefined = characters.find((char) => char.id === myCharacterId)
        return me;
    }, [characters, myCharacterId])


    const maxHp = useMemo(() => {
        if (!myCharacter) return 0;
        return getPipStat(myCharacter, 'hpMax').total;
    }, [myCharacter]);

    const maxStress = useMemo(() => {
        if (!myCharacter) return 0;
        return getPipStat(myCharacter, 'stressMax').total;
    }, [myCharacter]);

    const maxArmor = useMemo(() => {
        if (!myCharacter) return 0;
        return getPipStat(myCharacter, 'armorMax').total;
    }, [myCharacter]);

    const maxHope = useMemo(() => {
        if (!myCharacter) return 0;
        return getPipStat(myCharacter, 'hopeMax').total;
    }, [myCharacter]);

    const evasion = useMemo(() => {
        if (!myCharacter) return 0;
        return getStat(myCharacter, 'evasion').total;
    }, [myCharacter]);

    const majorThreshold = useMemo(() => {
        if (!myCharacter) return 0;
        return getStat(myCharacter, 'majorThreshold').total;
    }, [myCharacter]);

    const severeThreshold = useMemo(() => {
        if (!myCharacter) return 0;
        return getStat(myCharacter, 'severeThreshold').total;
    }, [myCharacter]);

    const armorScore = useMemo(() => {
        if (!myCharacter) return 0;
        return getStat(myCharacter, 'armorScore').total;
    }, [myCharacter]);

    const primaryMeleeDamage = useMemo(() => {
        if (!myCharacter) return 0;
        return getStat(myCharacter, 'primaryMeleeDamage').total;
    }, [myCharacter]);

    const agility = useMemo(() => {
        if (!myCharacter) return 0;
        return getAttribute(myCharacter, 'agility').total;
    }, [myCharacter]);

    const strength = useMemo(() => {
        if (!myCharacter) return 0;
        return getAttribute(myCharacter, 'strength').total;
    }, [myCharacter]);

    const finesse = useMemo(() => {
        if (!myCharacter) return 0;
        return getAttribute(myCharacter, 'finesse').total;
    }, [myCharacter]);

    const instinct = useMemo(() => {
        if (!myCharacter) return 0;
        return getAttribute(myCharacter, 'instinct').total;
    }, [myCharacter]);

    const presence = useMemo(() => {
        if (!myCharacter) return 0;
        return getAttribute(myCharacter, 'presence').total;
    }, [myCharacter]);

    const knowledge = useMemo(() => {
        if (!myCharacter) return 0;
        return getAttribute(myCharacter, 'knowledge').total;
    }, [myCharacter]);

    const name = useMemo(() => {
        if (!myCharacter) return '';
        return myCharacter.name;
    }, [myCharacter?.name]);

    const clas = useMemo(() => {
        if (!myCharacter) return undefined;
        return clasData[myCharacter.clas]
    }, [myCharacter?.clas])

    const subclas = useMemo(() => {
        if (!myCharacter) return undefined;
        return subclasData[myCharacter.subclas];
    }, [myCharacter?.subclas])

    const ancestry1 = useMemo(() => {
        if (!myCharacter) return undefined;
        return ancestryData[myCharacter.ancestry1];
    }, [myCharacter?.ancestry1])

    const ancestry2 = useMemo(() => {
        if (!myCharacter) return undefined;
        return ancestryData[myCharacter.ancestry2];
    }, [myCharacter?.ancestry2])

    const community = useMemo(() => {
        if (!myCharacter) return undefined;
        return communityData[myCharacter.community];
    }, [myCharacter?.community])

    const primaryWeapon = useMemo(() => {
        if (!myCharacter || !myCharacter.primaryWeapon) return undefined;
        return weaponData[myCharacter.primaryWeapon];
    }, [myCharacter?.primaryWeapon])

    const secondaryWeapon = useMemo(() => {
        if (!myCharacter || !myCharacter.secondaryWeapon) return undefined;
        return weaponData[myCharacter.secondaryWeapon];
    }, [myCharacter?.secondaryWeapon])

    const armor = useMemo(() => {
        if (!myCharacter || !myCharacter.armor) return undefined;
        return armorData[myCharacter.armor];
    }, [myCharacter?.armor])

    const domainCards = useMemo(() => {
        if (!myCharacter) return undefined;
        return myCharacter.dC.map((domainCard) => DomainCardData[domainCard]);
    }, [myCharacter?.dC])

    const experiences = useMemo(() => {
        if (!myCharacter) return undefined;
        return myCharacter.ex;
    }, [myCharacter?.ex])

    const payCost = (cost: Cost) => {
        if (!myCharacter) return;
        const marked = myCharacter.marked;
        // TODO: stress overflow into HP
        marked.hp = Math.min(maxHp, Math.max(0, marked.hp + (cost.hp || 0)));
        marked.stress = Math.min(maxStress, Math.max(0, marked.stress + (cost.stress || 0)));
        marked.armor = Math.min(maxArmor, Math.max(0, marked.armor + (cost.armor || 0)));
        marked.hope = Math.min(maxHope, Math.max(0, marked.hope + (cost.hope || 0)));
        updateCharacter(myCharacter);
    }

    const DIAM = 15;
    const GAP = 4;
    const PADDING = 3

    const pickCharacter = (char?: Character) => {
        setMyCharacterId(char?.id || '')
    }

    const buildBackground = (item: Image, max: number, dpi: number) => {
        const scale = Math.abs(item.scale.x)
        const scaleSign = item.scale.x >=0 ? 1 : -1

        const width = (max * DIAM) + ((max-1) * GAP) + (2 * PADDING);
        const height = DIAM + (2 * PADDING);
        const position: Vector2 = {
            x: item.position.x - scaleSign * (width/2) * scale,
            y: item.position.y - (0.6 * dpi + DIAM/2 + PADDING) * scale,
        };
        return buildShape()
            .shapeType("RECTANGLE")
            .width(width)
            .height(height)
            .layer("ATTACHMENT")
            .fillColor('rgba(30, 34, 49, 0.6)')
            .strokeWidth(0)
            .attachedTo(item.id)
            .position(position)
            .visible(item.visible)
            .scale(item.scale)
            .locked(true)
            .disableHit(true)
            .metadata({[`brp-${item.name}`]: true})
            .build()
    }

    const buildHpCircle = (item: Image, idx: number, max: number, marked: boolean, dpi: number) => {
        const scale = Math.abs(item.scale.x)

        const totalwidth = ((max * DIAM) + (max-1) * GAP);
        const offsetX = (idx * (DIAM + GAP))
        const position: Vector2 = {
            x: item.position.x + (offsetX - totalwidth/2 + (DIAM/2)) * scale,
            y: item.position.y - 0.6 * dpi * scale,
        };
        return buildShape()
            .shapeType("CIRCLE")
            .width(DIAM)
            .height(DIAM)
            .layer("ATTACHMENT")
            .fillOpacity(1)
            .fillColor(marked ? 'red' : 'rgba(200,200,200,0.2)')
            .strokeWidth(0)
            .attachedTo(item.id)
            .position(position)
            .visible(item.visible)
            .scale(item.scale)
            .locked(true)
            .disableHit(true)
            .metadata({[`brp-${item.name}`]: true})
            .build()
    }

    useEffect(() => {
        const dpi = OBR.scene.grid.getDpi();
        const items = OBR.scene.items.getItems<Image>((item) => {
            return (
                item.name === name
                || item.metadata[`brp-${name}`] === true
            )
        })

        Promise.all([dpi, items]).then(([dpi, items]) => {
            const oldAttachments = items.filter((item) => item.metadata[`brp-${name}`] === true)
            const tokens = items.filter((item) => item.name === name)
            const shapesToAdd: Shape[] = [];
            for (const token of tokens) {
                shapesToAdd.push(buildBackground(token, maxHp, dpi))
                for (let idx = 0; idx<maxHp; idx++) {
                    shapesToAdd.push(buildHpCircle(token, idx, maxHp, idx < (myCharacter?.marked.hp || 0), dpi))
                }
            }
            if (oldAttachments.length > 0) {
                OBR.scene.items.deleteItems(oldAttachments.map((item) => item.id))
            }
            if (shapesToAdd.length > 0) {
                OBR.scene.items.addItems(shapesToAdd)
            }
        })
    }, [maxHp, myCharacter?.marked.hp, name])

    const abilities = useMemo(() => {
        const ids = [];
        domainCards?.forEach((card) => {
            ids.push(...card.abilities)
        })
        ids.push(
            ...clas?.abilities || [],
            ...subclas?.foundation || [],
            ...ancestry1?.primaryAbilities || [],
            ...ancestry2?.secondaryAbilities || [],
            ...community?.abilities || [],
        );
        return ids.map((ability) => abilityData[ability]).filter((ability) => ability !== undefined)
    }, [myCharacter, domainCards])

    const abilityState = useMemo(() => {
        const result:{[ability: number]: any} = {};
        for (let ability of abilities) {
            result[ability.id] = myCharacter?.abState[ability.id] || ability.defaultState;
        }
        return result;
    }, [myCharacter, abilities])

    const value = useMemo(() => ({
        myCharacter,
        maxHp,
        maxStress,
        maxArmor,
        maxHope,
        evasion,
        majorThreshold,
        severeThreshold,
        armorScore,
        primaryMeleeDamage,
        attrs: {
            agility,
            strength,
            finesse,
            instinct,
            presence,
            knowledge,
        },
        experiences,
        name,
        clas,
        subclas,
        ancestry1,
        ancestry2,
        community,
        domainCards,
        primaryWeapon,
        secondaryWeapon,
        armor,
        abilities,
        abilityState,
        payCost,
        pickCharacter,
    }), [myCharacter, characters, maxHp, maxStress, maxArmor, maxHope, evasion, majorThreshold, severeThreshold, armorScore, agility, strength, finesse, instinct, presence, knowledge, experiences])
    return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>
};

export const useCharacterContext = () => {
    const ctx = useContext(CharacterContext);
    return ctx;
}