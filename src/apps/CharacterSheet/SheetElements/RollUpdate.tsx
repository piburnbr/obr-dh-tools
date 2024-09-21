import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';
import { useRollContext } from '../../Shared/Contexts/RollContext';
import { DieUpdate } from '../../Shared/Types';

type Props = PropsWithChildren<{
    id: string,
    dieUpdates: DieUpdate[],
}>

const RollUpdate:React.FunctionComponent<Props> = ({id, dieUpdates, children}:Props) => {
    const {rollUpdateIds, setAddOn, removeAddOn} = useRollContext();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setAddOn(dieUpdates, id);
    }

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        removeAddOn(dieUpdates, id);
    }

    return (
        <Container $glow={rollUpdateIds.includes(id)} onClick={handleClick} onContextMenu={handleRightClick}>
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

export default RollUpdate