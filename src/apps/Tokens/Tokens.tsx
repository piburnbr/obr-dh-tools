import React from 'react';
import TokenTray from './TokenTray';
import { useRoomContext } from '../Shared/Contexts/RoomContext';


const Tokens: React.FunctionComponent = () => {

    const {
        fearTokens,
        actionTokens,
        pushActionToken,
        pushFearToken,
        popActionToken,
        popFearToken,
    } = useRoomContext()


    return (
        <div>
            <TokenTray title="Fear Tokens" tokens={fearTokens} onAdd={pushFearToken} onRemove={popFearToken} iconList={["Skulll"]} />
            <TokenTray title="Action Tracker" tokens={actionTokens} onAdd={pushActionToken} onRemove={popActionToken} iconList={["Sword", "Staff", "Bow", "Shield"]} />
        </div>
    )
}

export default Tokens;