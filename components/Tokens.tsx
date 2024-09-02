import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import OBR, { Metadata } from '@owlbear-rodeo/sdk';

import { ID } from "../constants";
import IconWrapper from './icons/IconWrapper'

type TokenData = {
    x: Number,
    y: Number,
    rotate: Number,
    icon: string,
}

type RoomMeta = {
    [key: string]: TokenData[]
}

type Props = {
    title: string,
    attr: string,
    iconList: string[],
}

const Tokens: React.FunctionComponent<Props> = ({title, attr, iconList}: Props) => {
    const [tokenData, setTokenData] = useState<TokenData[]>([]);
    const [role, setRole] = useState<"GM" | "PLAYER">("PLAYER");

    const META_KEY = `${ID}/${attr}`

    const ROTATE_LIMIT = 180;
    const X_LIMIT = 5;
    const Y_LIMIT = 5;

    const SCALE = (40.0/30);
    const SVG_WIDTH = 175
    const SVG_HEIGHT = 30 + Y_LIMIT;

    const getTokens = (metadata: RoomMeta) => metadata[META_KEY] || [];

    useEffect(() => {
        OBR.player.getRole().then(setRole);
        return OBR.player.onChange((player) => setRole(player.role));
    })

    useEffect(() => {
        const handleMetadataChange = (metadata: Metadata) => {
            setTokenData(getTokens(metadata as RoomMeta));
        }
        OBR.room.getMetadata().then(handleMetadataChange)
        return OBR.room.onMetadataChange(handleMetadataChange);
    })

    const addToken = () => {
        const newToken = {
            x: (tokenData.length % 10) * 15 + Math.random() * X_LIMIT,
            y: Math.random() * Y_LIMIT,
            rotate: Math.random() * 2 * ROTATE_LIMIT - ROTATE_LIMIT,
            icon: iconList[Math.floor(Math.random() * iconList.length)],
        }
        OBR.room.setMetadata({
            [META_KEY]: [...tokenData, newToken]
        })
    };
    const removeToken = () => {
        OBR.room.setMetadata({
            [META_KEY]: tokenData.slice(0, -1)
        })
    };

    return (
        <>
            <Header>
                <h3>{title} ({tokenData.length})</h3>
                {role === "GM" && <div>
                    <PlusButton onClick={addToken}>+</PlusButton>
                    <MinusButton onClick={removeToken}>-</MinusButton>
                </div>}
            </Header>
            <TokenArea width={SCALE * SVG_WIDTH} height={SCALE * SVG_HEIGHT} viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}>
                {tokenData.map((token, idx) => {
                    return (<IconWrapper key={idx} x={token.x} y={token.y} rotate={token.rotate} icon={token.icon} />)
                })}
            </TokenArea>
        </>
    )
}

const TokenArea = styled.svg`
    background-color: rgba(0,0,0,0.25);
`

const PlusButton = styled.button`
    background-color: green;
`

const MinusButton = styled.button`
    background-color: red;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export default Tokens;