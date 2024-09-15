import React from 'react';
import { useRoomContext } from '../Shared/Contexts/RoomContext';
import Sheet from './Sheet';
import Picker from '../CharacterPicker';

type Props = {

}

const CharacterSheet: React.FunctionComponent<Props> = () => {
    const {myCharacter} = useRoomContext();

    return (
        <>
            { myCharacter ? <Sheet /> : <Picker />}
        </>
    )
}

export default CharacterSheet;