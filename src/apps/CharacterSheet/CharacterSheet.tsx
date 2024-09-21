import React, {useState} from 'react';
import Editor from './Editor';
import Sheet from './Sheet';
import Picker from '../CharacterPicker';
import { useCharacterContext } from '../Shared/Contexts/CharacterContext';

type Props = {

}

const CharacterSheet: React.FunctionComponent<Props> = () => {
    const {myCharacter} = useCharacterContext();
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit = () => setIsEditing((val) => !val);

    return (
        <>
            { !myCharacter && <Picker />}
            { myCharacter && isEditing && <Editor toggleEdit={toggleEdit} />}
            { myCharacter && !isEditing && <Sheet toggleEdit={toggleEdit} />}
        </>
    )
}

export default CharacterSheet;