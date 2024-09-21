import React, { PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react';

import OBR, { Metadata } from '@owlbear-rodeo/sdk';

import { ID } from "../../../../constants";
import { TokenData } from '../Types/TokenData';
import { CountdownData } from '../Types/CountdownData';
import { Roll } from '../Types/Roll/Roll';
import { CharacterEntry, Character } from '../Types';
import { usePlayerContext } from './PlayerContext';

const FEAR_ID = `${ID}/fear`
const ACTION_ID = `${ID}/action`
const COUNTDOWN_ID = `${ID}/countdowns`
const ROLL_ID = `${ID}/rolls`
const CHARACTER_LIST_ID = `${ID}/characters`
const CHARACTER_ID = `${ID}/char/`

const getCharacterId = (id: string) => CHARACTER_ID + id;

type RoomMeta = {
    [FEAR_ID]: TokenData[];
    [ACTION_ID]: TokenData[];
    [COUNTDOWN_ID]: CountdownData[];
    [ROLL_ID]: Roll[];
    [CHARACTER_LIST_ID]: CharacterEntry[];
} & {
    [CHAR_ID: string]: Character;
}

type RoomContextProps = {
    // FEAR TOKENS
    fearTokens: TokenData[];
    pushFearToken: (token: TokenData) => void;
    popFearToken: () => void;

    // ACTION TOKENS
    actionTokens: TokenData[];
    pushActionToken: (token: TokenData) => void;
    popActionToken: () => void;

    // COUNTDOWNS
    countdowns: CountdownData[];
    pushCountdown: (countdown: CountdownData) => void;
    deleteCountdown: (idx: number) => void;
    updateCountdown: (idx: number, value: number) => void;

    // ROLLS
    rolls: Roll[]
    pushRoll: (roll: Roll) => void;
    clearRolls: () => void;

    // CHARACTERS
    characters: Character[],
    pushCharacter: (character: Character) => void;
    updateCharacter: (character: Character) => void;
    deleteCharacter: (id: string) => void;
}

export const RoomContext = React.createContext<RoomContextProps>({
    fearTokens: [],
    pushFearToken: () => {},
    popFearToken: () => {},
    actionTokens: [],
    pushActionToken: () => {},
    popActionToken: () => {},
    countdowns: [],
    pushCountdown: () => {},
    deleteCountdown: () => {},
    updateCountdown: () => {},
    rolls: [],
    pushRoll: () => {},
    clearRolls: () => {},
    characters: [],
    pushCharacter: () => {},
    updateCharacter: () => {},
    deleteCharacter: () => {},
});

export const RoomProvider:React.FunctionComponent<PropsWithChildren> = ({children}: PropsWithChildren) => {
    const { isGM } = usePlayerContext()
    const [fearTokens, setFearTokens] = useState<TokenData[]>([]);
    const [actionTokens, setActionTokens] = useState<TokenData[]>([]);
    const [countdowns, setCountdowns] = useState<CountdownData[]>([]);
    const [rolls, setRolls] = useState<Roll[]>([]);
    const [characterList, setCharacterList] = useState<CharacterEntry[]>([]);
    const [characters, setCharacters] = useState<Character[]>([])

    

    useEffect(() => {
        const updateFromMeta = (metadata: Metadata) => {
            const roomMeta = metadata as RoomMeta;
            setFearTokens(roomMeta[FEAR_ID] || []);
            setActionTokens(roomMeta[ACTION_ID] || []);
            setCountdowns(roomMeta[COUNTDOWN_ID] || []);
            setRolls(roomMeta[ROLL_ID] || []);

            const charList = roomMeta[CHARACTER_LIST_ID] || []
            setCharacterList(charList);

            const chars:Character[] = [];
            for (let charEntry of charList) {
                chars.push(roomMeta[getCharacterId(charEntry.id)]);
            }
            setCharacters(chars)

            const report:{[key: string]: number} = {}
            for (let key of Object.keys(metadata)) {
                const bytes = new TextEncoder().encode(JSON.stringify(metadata[key])).length / 1024
                report[key] = Math.round(bytes * 1000) / 1000
            }
            report['total'] = Math.round((new TextEncoder().encode(JSON.stringify(metadata)).length / 1024) * 1000) / 1000
            if (isGM) {
                console.log(report)
            }
        }
        OBR.room.getMetadata().then(updateFromMeta);
        return OBR.room.onMetadataChange(updateFromMeta);
    }, []);

    const pushFearToken = (token: TokenData) => {
        OBR.room.setMetadata({
            [FEAR_ID]: [...fearTokens, token]
        })
    }

    const popFearToken = () => {
        OBR.room.setMetadata({
            [FEAR_ID]: fearTokens.slice(0, -1)
        })
    }

    const pushActionToken = (token: TokenData) => {
        OBR.room.setMetadata({
            [ACTION_ID]: [...actionTokens, token]
        })
    }

    const popActionToken = () => {
        OBR.room.setMetadata({
            [ACTION_ID]: actionTokens.slice(0, -1)
        })
    }

    const pushCountdown = (countdown: CountdownData) => {
        OBR.room.setMetadata({
            [COUNTDOWN_ID]: [...countdowns, countdown]
        });
    }

    const deleteCountdown = (idx: number) => {
        OBR.room.setMetadata({
            [COUNTDOWN_ID]: [...countdowns.slice(0, idx), ...countdowns.slice(idx+1)]
        })
    }

    const updateCountdown = (idx: number, value: number) => {
        OBR.room.setMetadata({
            [COUNTDOWN_ID]: [
                ...countdowns.slice(0, idx),
                {
                    title: countdowns[idx].title,
                    remaining: value
                },
                ...countdowns.slice(idx+1)
            ]
        })
    }

    const pushRoll = (roll: Roll) => {
        OBR.room.setMetadata({
            [ROLL_ID]: [...rolls.slice(-9), roll]
        })
    }

    const clearRolls = () => {
        OBR.room.setMetadata({
            [ROLL_ID]: []
        })
    }

    const pushCharacter = (character: Character) => {
        const characterEntry:CharacterEntry = {
            id: character.id,
            name: character.name,
        }
        OBR.room.setMetadata({
            [CHARACTER_LIST_ID]: [
                ...characterList, characterEntry
            ],
            [getCharacterId(character.id)]: character,
        })
    }

    const updateCharacter = (character: Character) => {
        const idx = characterList.findIndex((c:CharacterEntry) => c.id === character.id)
        if (idx < 0) return;
        OBR.room.setMetadata({
            [CHARACTER_LIST_ID]: [
                ...characterList.slice(0, idx),
                {
                    id: character.id,
                    name: character.name,
                },
                ...characterList.slice(idx+1)
            ],
            [getCharacterId(character.id)]: character,
        })
    }

    const deleteCharacter = (id: string) => {
        const idx = characterList.findIndex((c:CharacterEntry) => c.id === id)
        if (idx < 0) return;
        OBR.room.setMetadata({
            [CHARACTER_LIST_ID]: [
                ...characterList.slice(0, idx),
                ...characterList.slice(idx+1)
            ],
            [getCharacterId(id)]: undefined,
        })
    }

    const value = useMemo(() => ({
        fearTokens,
        pushFearToken,
        popFearToken,
        actionTokens,
        pushActionToken,
        popActionToken,
        countdowns,
        pushCountdown,
        deleteCountdown,
        updateCountdown,
        rolls,
        pushRoll,
        clearRolls,
        characters,
        pushCharacter,
        updateCharacter,
        deleteCharacter,
    }), [fearTokens, actionTokens, countdowns, rolls, characters]);

    return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>
}

export const useRoomContext = () => {
    const ctx = useContext(RoomContext);
    return ctx
}
