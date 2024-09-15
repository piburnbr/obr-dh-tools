import React from 'react';
import styled from'styled-components';

import { useRollContext } from '../Shared/Contexts/RollContext';

type Props = {
    dieName: string,
}

const DieInput: React.FunctionComponent<Props> = ({dieName}: Props) => {
    const { diceToRoll, updateDie } = useRollContext();
    const val = diceToRoll[dieName]

    const onChange = (value: string) => {
        updateDie(dieName, parseInt(value))
    }
    return (
        <ModInput value={val} onChange={e => onChange(e.target.value)} $used={Boolean(val)} placeholder="0"/>
    )
}

const ModInput = styled.input.attrs({type: 'number'})<{$used: boolean}>`
    width: 40px;
    opacity: ${({$used}) => $used ? 1 : 0.4};
    border: none;
    background-color: gray;
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
`

export default DieInput;