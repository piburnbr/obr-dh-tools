import React, {useEffect, useState, useMemo} from 'react';
import styled from 'styled-components';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import Button from '../../Shared/Button';

type Props = {
    attr: "name",
}

const Name:React.FunctionComponent<Props> = ({attr}: Props) => {
    const { myCharacter, updateCharacter } = useRoomContext();
    const [isEditing, setIsEditing] = useState(false);
    const [newVal, setNewVal] = useState('')

    const val = useMemo(() => {
        if (!myCharacter) return '';
        return myCharacter[attr]
    }, [myCharacter?.[attr]])

    useEffect(() => {
        if (!myCharacter) return;
        setNewVal(val)
    }, [val])

    const toggleEdit = () => {
        if (!myCharacter) return;
        if (isEditing) {
            myCharacter[attr] = newVal;
            updateCharacter(myCharacter)
        }
        setIsEditing((val) => !val)
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewVal(e.target.value);
    }

    if (!myCharacter) return <></>

    return (
        isEditing ? (
            <Container>
                <Input value={newVal} onChange={handleInputChange} />
                <Button onClick={toggleEdit}>save</Button>
            </Container>
        ) : (
            <Clickable onClick={toggleEdit}>
                <Title>{val}</Title>
            </Clickable>
        )
    )
}

const Container = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
    padding: 0 6px;
`

const Input = styled.input`
    width: 100px;
`

const Clickable = styled.div`
    &:hover {
        background-color: gray;
    }
    display: flex;
    border-radius: 10px;
    padding: 0 6px;
`

const Title = styled.span`
    font-size: 28;
`

export default Name;