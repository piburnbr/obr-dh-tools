import React, {useMemo} from 'react';
import styled from 'styled-components';
import Button from '../../Shared/Button';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';

type Props = {
    label: string;
    color: string;
    attr: 'hp' | 'stress' | 'armor' | 'hope';
}

const Meter: React.FunctionComponent<Props> = ({label, color, attr}: Props) => {
    const { myCharacter, updateCharacter } = useRoomContext();

    const pipData = useMemo(() => {
        return myCharacter?.state[attr]
    }, [myCharacter])

    if (!myCharacter || !pipData) return <></>

    const handlePlusClick = () => {
        if (pipData.marked < pipData.max) {
            myCharacter.state[attr].marked += 1;
            updateCharacter(myCharacter);
        }
    }

    const handleMinusClick = () => {
        if (pipData.marked > 0) {
            myCharacter.state[attr].marked -= 1;
            updateCharacter(myCharacter);
        }
    }

    return (
        <Container>
            <Label>{label}</Label>
            <Button onClick={handleMinusClick}>-</Button>
            {Array.apply(null, Array(pipData.max)).map((_, idx) => (
                <Node color={color} $marked={idx < pipData.marked} key={idx} />
            ))}
            <Button onClick={handlePlusClick}>+</Button>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1px;
`

const Label = styled.div`
    width: 50px;sus
`

const Node = styled.div<{$marked: boolean, color: string}>`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: ${({$marked, color}) => $marked ? color : 'black'};


`

export default Meter;