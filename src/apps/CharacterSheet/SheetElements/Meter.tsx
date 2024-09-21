import React, {useMemo} from 'react';
import styled from 'styled-components';
import Button from '../../Shared/Button';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import { useCharacterContext } from '../../Shared/Contexts/CharacterContext';

type Props = {
    label: string;
    color: string;
    attr: 'hp' | 'stress' | 'armor' | 'hope';
    max: number;
}

const Meter: React.FunctionComponent<Props> = ({label, color, attr, max}: Props) => {
    const { updateCharacter } = useRoomContext();
    const { myCharacter } = useCharacterContext();
    const marked = useMemo(() => {
        return myCharacter?.marked[attr] || 0
    }, [myCharacter, attr])

    if (!myCharacter) return <></>

    const handlePlusClick = () => {
        if (marked < max) {
            myCharacter.marked[attr] += 1;
            updateCharacter(myCharacter);
        }
    }

    const handleMinusClick = () => {
        if (marked > 0) {
            myCharacter.marked[attr] -= 1;
            updateCharacter(myCharacter);
        }
    }

    return (
        <Container>
            <Label>{label}</Label>
            <Button onClick={handleMinusClick}>-</Button>
            <Nodes>
                {Array.apply(null, Array(max)).map((_, idx) => (
                    <Node color={color} $marked={idx < marked} key={idx} />
                ))}
            </Nodes>
            <Button onClick={handlePlusClick}>+</Button>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Label = styled.div`
    width: 50px;
`

const Nodes = styled.div`
    display: flex;
    gap: 1px;
`

const Node = styled.div<{$marked: boolean, color: string}>`
    height: 12px;
    width: 9px;
    border-radius: 50%;
    background-color: ${({$marked, color}) => $marked ? color : 'rgba(200,200,200,0.2)'};
`

export default Meter;