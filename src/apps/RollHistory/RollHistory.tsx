import React from 'react';
import styled from'styled-components';

import { Roll, Visibility } from "../Shared/Types/Roll";

import Button from '../Shared/Button';
import RollDisplay from "./RollDisplay";
import { useRoomContext } from '../Shared/Contexts/RoomContext';
import { usePlayerContext } from '../Shared/Contexts/PlayerContext';

type Props = {
}

const RollHistory: React.FunctionComponent<Props> = () => {
    const { rolls, clearRolls } = useRoomContext();
    const { isGM, playerName } = usePlayerContext();

    const canSeeRoll = (roll:Roll):boolean => {
        switch(roll.visibility) {
            case Visibility.GM :
                return isGM;
            case Visibility.PRIVATE :
                return roll.playerName === playerName;
            case Visibility.PRIVATE_AND_GM:
                return roll.playerName === playerName || isGM
            case Visibility.ALL:
            default:
                return true;
        }
    }

    const clearHistory = () => {
        clearRolls();
    }

    return (
        <Container>
            {rolls.filter(canSeeRoll).map((_, idx) => rolls[rolls.length - idx - 1]).map((roll, idx) => {
                return (<RollDisplay roll={roll} key={rolls.length - idx}/>)
            })}
            {isGM && <Button onClick={clearHistory}>Clear</Button>}
        </Container>
    )
}


const Container = styled.div`
    min-height: 40px;
    max-height: 300px;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: gray transparent;
    scrollbar-gutter: stable;
`

export default RollHistory;
