import React, { useState } from 'react';
import styled from 'styled-components';

import { Character } from '../Shared/Types/Character/Character';
import Button from '../Shared/Button';
import { useRoomContext } from '../Shared/Contexts/RoomContext';
import { usePlayerContext } from '../Shared/Contexts/PlayerContext';
import { useCharacterContext } from '../Shared/Contexts/CharacterContext';
import { Clas, Subclas, Ancestry, Community, BladeCard, ValorCard } from '../Shared/Types';
type Props = {
}

const Picker: React.FunctionComponent<Props> = () => {
    const { characters, pushCharacter, deleteCharacter } = useRoomContext()
    const { pickCharacter } = useCharacterContext();
    const { isGM } = usePlayerContext();
    const [selected, setSelected] = useState(0);

    const handleSelect = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(parseInt(event.target.value));
    }

    const clickPick = () => {
        pickCharacter(characters[selected])
    }

    const clickDelete = () => {
        deleteCharacter(characters[selected].id)
        setSelected(characters.length-2)
    }

    const clickCreate = () => {
        const newCharacter: Character = {
            id: '' + Math.floor(Math.random() * 10000),
            name: `New Character`,
            clas: Clas.RANGER,
            subclas: Subclas.BEASTBOUND,
            ancestry1: Ancestry.HUMAN,
            ancestry2: Ancestry.HUMAN,
            community: Community.HIGHBORNE,
            level: 1,

            proficiency: 1,

            marked: {
                hp: 2,
                stress: 2,
                armor: 2,
                hope: 2,
            },
    
            attr: {
                agility: 0,
                strength: -2,
                finesse: 1,
                instinct: 2,
                presence: 1,
                knowledge: 0
            },

            abState: {},

            dC: [BladeCard.RETALIATION, ValorCard.I_AM_YOUR_SHIELD],
            vault: [],
        }
        pushCharacter(newCharacter);
        setSelected(characters.length)
    }

    return (
        <>
            <CharacterDropdown value={selected} onChange={handleSelect}>
                {characters.map((char, idx) => <option key={idx} value={idx}>{char.name}</option>)}
            </CharacterDropdown>
            <br/>
            <Button onClick={clickPick}>Pick</Button>
            <br/>
            {isGM && <Button onClick={clickCreate}>Create New Character</Button>}
            <br/>
            {isGM && <Button onClick={clickDelete}>Delete Character</Button>}
        </>
    )
}

const CharacterDropdown = styled.select`
    width: 150px;
`

export default Picker;