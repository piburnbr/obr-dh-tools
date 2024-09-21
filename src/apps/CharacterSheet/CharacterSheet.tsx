import React, {useState} from 'react';
import Editor from './Editor';
import Sheet from './Sheet';
import Picker from '../CharacterPicker';
import { useCharacterContext } from '../Shared/Contexts/CharacterContext';
import styled from 'styled-components';

type Props = {

}

const CharacterSheet: React.FunctionComponent<Props> = () => {
    const {myCharacter} = useCharacterContext();
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit = () => setIsEditing((val) => !val);

    return (
        <Container>
            { !myCharacter && <Picker />}
            { myCharacter && isEditing && <Editor toggleEdit={toggleEdit} />}
            { myCharacter && !isEditing && <Sheet toggleEdit={toggleEdit} />}
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
`

export default CharacterSheet;