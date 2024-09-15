import React, { PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react';

import OBR from '@owlbear-rodeo/sdk';

type PlayerContextProps = {
    isGM: boolean;
    playerName: string;
    playerColor: string;
}

const PlayerContext = React.createContext<PlayerContextProps>({
    isGM: false,
    playerName: '',
    playerColor: 'blue',
});

export const PlayerProvider:React.FunctionComponent<PropsWithChildren> = ({children}: PropsWithChildren) => {
    const [isGM, setIsGM] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const [playerColor, setPlayerColor] = useState('blue');

    useEffect(() => {
        OBR.player.getRole().then((role) => {setIsGM(role === 'GM')});
        OBR.player.getName().then(setPlayerName);
        OBR.player.getColor().then(setPlayerColor);
        return OBR.player.onChange((player) => {
            setIsGM(player.role === 'GM');
            setPlayerName(player.name);
            setPlayerColor(player.color);
        });
    }, []);

    const value = useMemo(() => ({
        isGM, playerName, playerColor
    }), [isGM, playerName, playerColor]);

    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export const usePlayerContext = () => {
    const ctx = useContext(PlayerContext);
    return ctx;
}