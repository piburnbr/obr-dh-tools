import React, {useMemo, useState} from "react";
import styled from "styled-components";
import Button from "../../Shared/Button";
import { useCharacterContext } from "../../Shared/Contexts/CharacterContext";
import Rollable from "./Rollable";
import { AbilityInfo, Character, Cost } from "../../Shared/Types";
import { useRoomContext } from "../../Shared/Contexts/RoomContext";
import RollUpdate from "./RollUpdate";

type Props = {
    ability: AbilityInfo;
    state: any;
}

const AbilityCard:React.FunctionComponent<Props> = ({ability, state}: Props) => {
    const {myCharacter, payCost} = useCharacterContext();
    const {updateCharacter} = useRoomContext();
    const [expanded, setExpanded] = useState(false);

    const source = useMemo(() => {
        if (ability.id >= 18000) return 'Valor Domain';
        if (ability.id >= 17000) return 'Splendor Domain';
        if (ability.id >= 16000) return 'Sage Domain';
        if (ability.id >= 15000) return 'Midnight Domain';
        if (ability.id >= 14000) return 'Grace Domain';
        if (ability.id >= 13000) return 'Codex Domain';
        if (ability.id >= 12000) return 'Bone Domain';
        if (ability.id >= 11000) return 'Blade Domain';
        if (ability.id >= 10000) return 'Arcana Domain';
        if (ability.id >= 4000) return 'Subclass';
        if (ability.id >= 3000) return 'Class';
        if (ability.id >= 2000) return 'Community';
        if (ability.id >= 1000) return 'Ancestry';
        return 'Other';
    }, [ability.id])

    const color = useMemo(() => {
        switch (source) {
            case 'Ancestry':
                return 'rgba(0,0,30,0.3)'
            case 'Community':
                return 'rgba(30,0,30,0.3)'
            case 'Class':
                return 'rgba(30,30,0,0.3)'
            case 'Subclass':
                return 'rgba(0,30,0,0.3)'
            default:
                return 'rgba(30,15,0,0.3)'
        }
    }, [source])

    const hoverColor = useMemo(() => {
        switch (source) {
            case 'Ancestry':
                return 'rgba(0,0,120,0.5)'
            case 'Community':
                return 'rgba(120,0,120,0.5)'
            case 'Class':
                return 'rgba(120,120,0,0.5)'
            case 'Subclass':
                return 'rgba(0,120,0,0.5)'
            default:
                return 'rgba(120,60,0,0.5)'
        }
    }, [source])

    if (!myCharacter) return undefined;

    const handleCostClick = (cost: Cost) => {
        return () => {
            if (!myCharacter) return;
            payCost(cost);
        }
    }

    const toggleExpanded = () => setExpanded((v) => !v)

    const getRollableId = (ab: AbilityInfo, rollIdx: number) => {
        return `ab-${ab.name}-${rollIdx}`;
    }

    const handleCustomButton = (cbHandler: (c: Character, s: any) => void) => {
        return () => {
            myCharacter.abState[ability.id] = cbHandler(myCharacter, state);
            updateCharacter(myCharacter);
        }
    }

    const handleUsesClick = (e:React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    }

    const handleUsesChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            myCharacter.abState[ability.id] = {
                ...state,
                u: state.u + 1
            }
        } else {
            myCharacter.abState[ability.id] = {
                ...state,
                u: state.u - 1
            }
        }
        updateCharacter(myCharacter)
    }

    return (
        <Card onClick={toggleExpanded} $bgcolor={color} $hoverbgcolor={hoverColor}>
            <TopRow>
                <Title>{expanded ? 'v' : '>'} {ability.name}</Title>
                <Source>{source}</Source>
            </TopRow>
            <Description $expanded={expanded}>
                {ability.description.split('\n').map((piece, idx) => (
                    <DescriptionPiece key={idx}>
                        {piece}
                    </DescriptionPiece>
                ))}
            </Description>
            {state && 'v' in state && (
                <Row>
                    Current Value: {state.v}
                </Row>
            )}
            <Row>
                {ability.customButtons && ability.customButtons.map((cb, idx) => (
                    <Button key={idx} onClick={handleCustomButton(cb.handler)}>
                        {cb.label}
                    </Button>
                ))}
            </Row>
            <Row>
                {ability.rolls && ability.rolls.map((roll, idx) => (
                    <Rollable
                        key={idx}
                        id={getRollableId(ability, idx)}
                        rollString={roll.rollString}
                        rollLabel={`${ability.name} (${roll.label})`}
                    >
                        {roll.label}: {roll.rollString}
                    </Rollable>
                ))}
                {ability.rollUpdates && ability.rollUpdates.map((roll, idx) => (
                    <RollUpdate key={idx} id={`${ability.name} (${roll.label})`} dieUpdates={roll.diceToAdd}>
                        {roll.label}
                    </RollUpdate>
                ))}
                {ability.costs && ability.costs.map((cost, idx) => (
                    <Button key={idx} onClick={handleCostClick(cost)}>
                        {cost.label}
                    </Button>
                ))}
            </Row>
            {ability.uses && (
                <Row>
                    {ability.uses.per}: {Array.apply(null, Array(ability.uses.count)).map((_, idx) => (
                        <input key={idx} type="checkbox" checked={idx < state.u} onChange={handleUsesChange} onClick={handleUsesClick} />
                    ))}
                </Row>
            )}
        </Card>
    )
}

const Card = styled.div<{$bgcolor: string, $hoverbgcolor: string}>`
    width: 100%;
    background-color: ${({$bgcolor}) => $bgcolor};
    padding: 3px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: ${({$hoverbgcolor}) => $hoverbgcolor};
    }
`

const TopRow = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`

const Title = styled.div`
`

const Source = styled.div`
    font-size: 11px;
`

const Description = styled.div<{$expanded: boolean}>`
    font-size: 13px;
    ${({$expanded}) => $expanded ? '' : 'display: none;'}
    padding-left: 8px;
`

const DescriptionPiece = styled.div`

`

const Row = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 13px;
    flex-wrap: wrap;
`

export default AbilityCard