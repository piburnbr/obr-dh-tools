import React from 'react';
import styled from 'styled-components';

import Button from '../Shared/Button';
import IconWrapper from './icons/IconWrapper'
import { TokenData } from '../Shared/Types/TokenData';
import { usePlayerContext } from '../Shared/Contexts/PlayerContext';


type Props = {
    title: string,
    tokens: TokenData[],
    onAdd: (token: TokenData) => void;
    onRemove: () => void;
    iconList: string[],
}

const TokenTray: React.FunctionComponent<Props> = ({title, tokens, onAdd, onRemove, iconList}: Props) => {
    const {isGM} = usePlayerContext();

    const ROTATE_LIMIT = 180;
    const X_LIMIT = 5;
    const Y_LIMIT = 5;

    const SCALE = (40.0/30);
    const SVG_WIDTH = 175
    const SVG_HEIGHT = 30 + Y_LIMIT;

    const addToken = () => {
        const newToken = {
            x: (tokens.length % 10) * 15 + Math.random() * X_LIMIT,
            y: Math.random() * Y_LIMIT,
            rotate: Math.random() * 2 * ROTATE_LIMIT - ROTATE_LIMIT,
            icon: iconList[Math.floor(Math.random() * iconList.length)],
        }
        onAdd(newToken)
    };
    const removeToken = () => {
        onRemove();
    };

    return (
        <>
            <Header>
                <h3>{title} ({tokens.length})</h3>
                {isGM && <div>
                    <Button color={'green'} onClick={addToken}>+</Button>
                    <Button color={'red'} onClick={removeToken}>-</Button>
                </div>}
            </Header>
            <TokenArea width={SCALE * SVG_WIDTH} height={SCALE * SVG_HEIGHT} viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}>
                {tokens.map((token, idx) => {
                    return (<IconWrapper key={idx} x={token.x} y={token.y} rotate={token.rotate} icon={token.icon} />)
                })}
            </TokenArea>
        </>
    )
}

const TokenArea = styled.svg`
    background-color: rgba(0,0,0,0.25);
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export default TokenTray;