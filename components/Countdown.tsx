import React, {useEffect, useState, FormEvent} from 'react';
import styled from 'styled-components';
import OBR, { Metadata } from '@owlbear-rodeo/sdk';

import { ID } from "../constants";

type CountdownData = {
    title: string,
    remaining: number,
}

type RoomMeta = {
    [key: string]: CountdownData[]
}

type Props = {
    resize: () => void,
}

const Countdown: React.FunctionComponent<Props> = ({resize}: Props) => {
    const [countdownData, setCountdownData] = useState<CountdownData[]>([]);
    const [role, setRole] = useState<"GM" | "PLAYER">("PLAYER");
    const [inputName, setInputName] = useState("");
    const [inputNum, setInputNum] = useState("");

    const META_KEY = `${ID}/countdowns`;

    const getCountdowns = (metadata: RoomMeta) => metadata[META_KEY] || [];

    useEffect(() => {
        OBR.player.getRole().then(setRole);
        return OBR.player.onChange((player) => setRole(player.role));
    })

    useEffect(() => {
        const handleMetadataChange = (metadata: Metadata) => {
            setCountdownData(getCountdowns(metadata as RoomMeta));
        }
        OBR.room.getMetadata().then(handleMetadataChange)
        return OBR.room.onMetadataChange(handleMetadataChange);
    })

    const createCountdown = (e: FormEvent) => {
        e.preventDefault();
        if (!inputName || !inputNum) return;
        const newCountdown: CountdownData = {
            title: inputName,
            remaining: Number(inputNum)
        }
        setInputName("");
        setInputNum("");
        OBR.room.setMetadata({
            [META_KEY]: [...countdownData, newCountdown]
        })
    }

    const deleteCountdown = (idx: number) => {
        OBR.room.setMetadata({
            [META_KEY]: [...countdownData.slice(0, idx), ...countdownData.slice(idx+1)]
        })
    }

    const incrementCountdown = (idx: number) => {
        OBR.room.setMetadata({
            [META_KEY]: [
                ...countdownData.slice(0, idx),
                {
                    title: countdownData[idx].title,
                    remaining: countdownData[idx].remaining+1
                },
                ...countdownData.slice(idx+1)
            ]
        })
    }

    const decrementCountdown = (idx: number) => {
        OBR.room.setMetadata({
            [META_KEY]: [
                ...countdownData.slice(0, idx),
                {
                    title: countdownData[idx].title,
                    remaining: Math.max(0, countdownData[idx].remaining-1)
                },
                ...countdownData.slice(idx+1)
            ]
        })
    }

    return (
        <>
            {countdownData.map((countdown, idx) => {
                return (
                    <CountdownRow key={idx}>
                        <h3>
                            {countdown.title}: {countdown.remaining}
                        </h3>
                        {
                            role === "GM" && (
                                <div>
                                    <PlusButton onClick={() => incrementCountdown(idx)}>+</PlusButton>
                                    <MinusButton onClick={() => decrementCountdown(idx)}>-</MinusButton>
                                    <DeleteButton onClick={() => deleteCountdown(idx)}>X</DeleteButton>
                                </div>
                            )
                        }
                    </CountdownRow>
                )
            })}
            {role === "GM" &&
                <>
                    <InputRow onSubmit={createCountdown}>
                        <InputName value={inputName} onChange={e => setInputName(e.target.value)} />
                        <InputNum value={inputNum} onChange={e => setInputNum(e.target.value)} />
                        <CreateButton type="submit">{'>'}</CreateButton>
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

const PlusButton = styled.button`
    background-color: green;
`

const MinusButton = styled.button`
    background-color: red;
`

const DeleteButton = styled.button`
    background-color: gray;
`

const CreateButton = styled.button`
    background-color: gray;
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
