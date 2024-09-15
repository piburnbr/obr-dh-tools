import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import Button from '../../Shared/Button';
import { Ancestry, getAncestryName, getAncestryOptions } from '../../../data/ancestries';

type Props = {
}

const AncestryDisplay:React.FunctionComponent<Props> = () => {
    const { myCharacter, updateCharacter } = useRoomContext();
    const [isEditing, setIsEditing] = useState(false);
    const [newVal1, setNewVal1] = useState(Ancestry.HUMAN);
    const [newVal2, setNewVal2] = useState(Ancestry.HUMAN);

    useEffect(() => {
        if (!myCharacter) return;
        setNewVal1(myCharacter.ancestry1)
    }, [myCharacter?.ancestry1])

    useEffect(() => {
        if (!myCharacter) return;
        setNewVal2(myCharacter.ancestry2)
    }, [myCharacter?.ancestry2])


    const toggleEdit = () => {
        if (!myCharacter) return;
        if (isEditing) {
            myCharacter.ancestry1 = newVal1;
            myCharacter.ancestry2 = newVal2;
            updateCharacter(myCharacter)
        }
        setIsEditing((val) => !val)
    }

    const handleInput1Change = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNewVal1(parseInt(e.target.value));
    }

    const handleInput2Change = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNewVal2(parseInt(e.target.value));
    }

    if (!myCharacter) return <></>

    return (
        <Container>
            {isEditing ? (
                <>
                    <select value={newVal1} onChange={handleInput1Change}>
                        {getAncestryOptions().map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                    </select>
                    <select value={newVal2} onChange={handleInput2Change}>
                        {getAncestryOptions().map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                    </select>
                    <Button onClick={toggleEdit}>save</Button>
                </>
            ) : (
                <Clickable onClick={toggleEdit}>
                    {getAncestryName(myCharacter.ancestry1)}
                    {myCharacter.ancestry1 !== myCharacter.ancestry2 && `-${getAncestryName(myCharacter.ancestry2)}`}
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

export default AncestryDisplay;