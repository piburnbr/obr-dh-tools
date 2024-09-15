import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import Button from '../../Shared/Button';

type Props = {}

const LevelDisplay:React.FunctionComponent<Props> = () => {
    const { myCharacter, updateCharacter } = useRoomContext();
    const [isEditing, setIsEditing] = useState(false);
    const [newVal, setNewVal] = useState(0)

    const options = [1,2,3,4,5,6,7,8,9,10]

    useEffect(() => {
        if (!myCharacter) return;
        setNewVal(myCharacter.level)
    }, [myCharacter?.level])

    const toggleEdit = () => {
        if (!myCharacter) return;
        if (isEditing) {
            myCharacter.level = newVal;
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
                        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <Button onClick={toggleEdit}>save</Button>
                </>
            ) : (
                <Clickable onClick={toggleEdit}>
                    Level {myCharacter.level}
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

export default LevelDisplay;