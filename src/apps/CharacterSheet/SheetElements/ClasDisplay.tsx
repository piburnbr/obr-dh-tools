import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import Button from '../../Shared/Button';
import { Clas, getClasName, getClasOptions, getSubclasOptions } from '../../../data/clases';
import { getSubclasName, Subclas } from '../../../data/subclases';

type Props = {
}

const ClasDisplay:React.FunctionComponent<Props> = () => {
    const { myCharacter, updateCharacter } = useRoomContext();
    const [isEditing, setIsEditing] = useState(false);
    const [newValClas, setNewValClas] = useState(Clas.BARD)
    const [newValSubclas, setNewValSubclas] = useState(Subclas.TROUBADOUR)

    useEffect(() => {
        if (!myCharacter) return;
        setNewValClas(myCharacter.clas)
        setNewValSubclas(myCharacter.subclas)
    }, [myCharacter?.clas])

    const toggleEdit = () => {
        if (!myCharacter) return;
        if (isEditing) {
            myCharacter.clas = newValClas;
            myCharacter.subclas = newValSubclas;
            updateCharacter(myCharacter)
        }
        setIsEditing((val) => !val)
    }

    const handleInputClasChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNewValClas(parseInt(e.target.value));
    }

    const handleInputSubclasChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNewValSubclas(parseInt(e.target.value));
    }

    if (!myCharacter) return <></>

    return (
        <Container>
            {isEditing ? (
                <>
                    <select value={newValClas} onChange={handleInputClasChange}>
                        {getClasOptions().map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                    </select>
                    <select value={newValSubclas} onChange={handleInputSubclasChange}>
                        {getSubclasOptions(newValClas).map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                    </select>
                    <Button onClick={toggleEdit}>save</Button>
                </>
            ) : (
                <Clickable onClick={toggleEdit}>
                    {getClasName(myCharacter.clas)} ({getSubclasName(myCharacter.subclas)})
                </Clickable>
            )}
        </Container>
        
    )
}

const Container = styled.span`
    display: inline;
    gap: 5px;
    padding: 0 6px;
`

const Clickable = styled.span`
    &:hover {
        background-color: gray;
    }
    display: inline-flex;
    border-radius: 10px;
    padding: 0 6px;
`

export default ClasDisplay;