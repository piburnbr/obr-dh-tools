import React, {useState, FormEvent} from 'react';
import styled from 'styled-components';

import Button from '../Shared/Button';
import { CountdownData } from '../Shared/Types/CountdownData';
import { useRoomContext } from '../Shared/Contexts/RoomContext';
import { usePlayerContext } from '../Shared/Contexts/PlayerContext';

const Countdown: React.FunctionComponent = () => {
    const [inputName, setInputName] = useState("");
    const [inputNum, setInputNum] = useState("");
    const { isGM } = usePlayerContext();
    const {
        countdowns,
        pushCountdown,
        deleteCountdown,
        updateCountdown,
    } = useRoomContext();

    const onClickCreate = (e: FormEvent) => {
        e.preventDefault();
        if (!inputName || !inputNum) return;
        const newCountdown: CountdownData = {
            title: inputName,
            remaining: Number(inputNum)
        }
        setInputName("");
        setInputNum("");
        pushCountdown(newCountdown)
    }

    const onDeleteCountdown = (idx: number) => {
        deleteCountdown(idx);
    }

    const onIncrementCountdown = (idx: number) => {
        updateCountdown(idx, countdowns[idx].remaining + 1)
    }

    const onDecrementCountdown = (idx: number) => {
        updateCountdown(idx, countdowns[idx].remaining - 1)
    }

    return (
        <>
            {countdowns.map((countdown, idx) => {
                return (
                    <CountdownRow key={idx}>
                        <h3>
                            {countdown.title}: {countdown.remaining}
                        </h3>
                        {
                            isGM && (
                                <div>
                                    <Button color={"green"} onClick={() => onIncrementCountdown(idx)}>+</Button>
                                    <Button color={"red"} onClick={() => onDecrementCountdown(idx)}>-</Button>
                                    <Button color={"gray"} onClick={() => onDeleteCountdown(idx)}>X</Button>
                                </div>
                            )
                        }
                    </CountdownRow>
                )
            })}
            {isGM &&
                <>
                    <InputRow onSubmit={onClickCreate}>
                        <InputName value={inputName} onChange={e => setInputName(e.target.value)} />
                        <InputNum value={inputNum} onChange={e => setInputNum(e.target.value)} />
                        <Button color={'gray'} type="submit">{'>'}</Button>
                    </InputRow>
                </>
            }
        </>
    )
}

const CountdownRow = styled.div`
    display: flex;
    justify-content: space-between;
`

const InputRow = styled.form`
    display: flex;
`

const InputName = styled.input`
    width: 100px;
`

const InputNum = styled.input.attrs({type:"number", min:0})`
    width: 50px;
`

export default Countdown;
