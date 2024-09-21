import React, { useMemo} from 'react';
import styled from 'styled-components';

import { Die, DieStyle } from "../Shared/Types";

type Props = {
    die: Die
}

const DieDisplay: React.FunctionComponent<Props> = ({die}: Props) => {
    const dieType = useMemo(() => {
        switch(die.style) {
            case DieStyle.NORMAL:
                return `d${die.sides}`;
            case DieStyle.ADV:
                return 'Adv';
            case DieStyle.DIS:
                return 'Dis';
            case DieStyle.HOPE:
                return 'Hope';
            case DieStyle.FEAR:
                return 'Fear';
            case DieStyle.MOD:
                return 'Mod';
            case DieStyle.CRIT:
                return 'Crit';
            default:
                return '';
        }
    }, [die.style, die.sides])

    const color = useMemo(() => {
        switch(die.style) {
            case DieStyle.HOPE:
                return 'gold';
            case DieStyle.FEAR:
                return 'cornflowerblue'
            case DieStyle.ADV:
                return 'lightgreen'
            case DieStyle.DIS:
                return 'lightcoral'
            default:
                return 'ivory';
        }
    }, [die.style])

    return (
        <Container color={color}>
            <DieResult>{die.result}</DieResult>
            <DieType>{dieType}</DieType>
        </Container>
    )
}

const Container = styled.div<{color?: string}>`
    ${({color}) => color ? `background-color: ${color};` : ''}
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items:center;
    border-radius: 20%;
    padding: 2px;
    width: 28px;
`

const DieResult = styled.div`
`

const DieType = styled.div`
    font-size: 12px;
`

export default DieDisplay;
