import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import Button from '../../Shared/Button';
import { Community, getCommunityName, getCommunityOptions } from '../../../data/communities';

type Props = {
}

const CommunityDisplay:React.FunctionComponent<Props> = () => {
    const { myCharacter, updateCharacter } = useRoomContext();
    const [isEditing, setIsEditing] = useState(false);
    const [newVal, setNewVal] = useState(Community.HIGHBORNE)

    useEffect(() => {
        if (!myCharacter) return;
        setNewVal(myCharacter.community)
    }, [myCharacter?.clas])

    const toggleEdit = () => {
        if (!myCharacter) return;
        if (isEditing) {
            myCharacter.community = newVal;
            updateCharacter(myCharacter)
        }
        setIsEditing((val) => !val)
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNewVal(parseInt(e.target.value));
    }

    if (!myCharacter) return <></>

    return (
        <Container>
            {isEditing ? (
                <>
                    <select value={newVal} onChange={handleInputChange}>
                        {getCommunityOptions().map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                    </select>
                    <Button onClick={toggleEdit}>save</Button>
                </>
            ) : (
                <Clickable onClick={toggleEdit}>
                    {getCommunityName(myCharacter.community)}
                </Clickable>
            )}
        </Container>
    )
}

const Container = styled.div`
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

export default CommunityDisplay;