import React, { useState, useMemo} from 'react';
import styled from 'styled-components';

import { Roll } from "../Shared/Types/Roll";
import DieDisplay from './DieDisplay';

type Props = {
    roll: Roll
}

const RollDisplay: React.FunctionComponent<Props> = ({roll}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((x) => !x)

    const notesColor = useMemo(() => {
        switch(roll.notes) {
            case "with Hope": 
                return 'gold';
            case "with Fear":
                return 'cornflowerblue'
            case "critical":
                return 'lightgreen'
            default:
                return 'transparent';
        }
    }, [roll.notes])

    return (
        <Card onClick={toggleExpanded}>
            <TopRow>
                <User>
                    {roll.playerColor && <PlayerColor color={roll.playerColor}/>}
                    {roll.playerName}
                </User>
                <Notes $backgroundColor={notesColor}>{roll.notes}</Notes>
            </TopRow>
            <Body>
                <Result>{roll.label}: {roll.total}</Result>
            </Body>
            {expanded && (
                <Expand>
                    <Breakdown>
                        {roll.dice.map((die, idx) => (
                            <DieDisplay key={idx} die={die} />
                        ))}
                    </Breakdown>
                </Expand>
            )}
        </Card>
    )
}

const Breakdown = styled.div`
    width: 100%;
    display: flex;
    gap: 1px;
    justify-content: center;
    flex-wrap: wrap;

`

const Card = styled.div`
    border: 1px solid black;
    background-color: rgba(220,220,220,0.7);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    padding-bottom: 3px;
`

// TOP ROW STUFF
const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const User = styled.div`
    font-size: 13px;
    padding-left: 2px;
    display: flex;
    gap: 3px;
    align-items: center;
`

const PlayerColor = styled.div<{color: string}>`
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background-color: ${({color}) => color};
`

const Notes = styled.div<{$backgroundColor: string}>`
    background-color: ${({$backgroundColor}) => $backgroundColor};
    font-size: 13px;
    padding: 0 2px;
`

// BODY STUFF
const Body = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Result = styled.div`
`

// EXPANDED STUFF
const Expand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default RollDisplay;