import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';
import { useRollContext } from '../../Shared/Contexts/RollContext';

type Props = PropsWithChildren<{
    id: string,
    rollString: string,
    rollLabel: string,
}>

const Rollable:React.FunctionComponent<Props> = ({id, rollString, rollLabel, children}:Props) => {
    const {rollableId, setRoll, clearRoll} = useRollContext();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setRoll(id, rollLabel, rollString)
    }

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (rollableId === id) {
            clearRoll()
        }
    }

    return (
        <Container $glow={id===rollableId} onClick={handleClick} onContextMenu={handleRightClick}>
            {children}
        </Container>
    )
}

const Container = styled.div<{$glow: boolean}>`
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
    background-color: ${({$glow}) => $glow ? 'gray' : 'rgba(200,200,200,0.1)'};
`

export default Rollable