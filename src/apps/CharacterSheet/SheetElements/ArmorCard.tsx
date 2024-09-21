import React, {useEffect, useState, useMemo} from 'react';
import styled from 'styled-components';
import Button from '../../Shared/Button';
import { useCharacterContext } from '../../Shared/Contexts/CharacterContext';
import { armorFeatureData, getArmorOptions } from '../../../data/armor';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import { Armor } from '../../Shared/Types';

type Props = {
}

const ArmorCard:React.FunctionComponent<Props> = () => {
    const {updateCharacter } = useRoomContext();
    const { myCharacter, armor } = useCharacterContext();
    const [isEditing, setIsEditing] = useState(false);
    const [newVal, setNewVal] = useState<Armor | undefined>(Armor.GAMBESON_ARMOR)

    const armorFeatureInfo = useMemo(() => {
        if (!armor || !armor.feature) return undefined;
        return armorFeatureData[armor.feature];
    }, [armor])

    useEffect(() => {
        if (!armor) return;
        setNewVal(armor.id)
    }, [armor])

    const toggleEdit = () => setIsEditing((val) => !val)

    const handleEdit = () => {
        toggleEdit()
    }

    const handleSave = () => {
        if (isEditing) {
            if (!myCharacter) return;
            myCharacter.armor = newVal;
            updateCharacter(myCharacter);
        }
        toggleEdit()
    }

    const handleCancel = () => {
        toggleEdit()
    }

    const handleRemoveClick = () => {
        if (!myCharacter) return;
        myCharacter.armor = undefined;
        updateCharacter(myCharacter);
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNewVal(parseInt(e.target.value));
    }

    if (!myCharacter) return undefined;

    return (
        isEditing ? (
            <Container>
                <select value={newVal} onChange={handleInputChange}>
                    {getArmorOptions().map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                </select>
                <Button onClick={handleSave}>save</Button>
                <Button onClick={handleCancel}>cancel</Button>
            </Container>
        ) : (
            armor ? (
                <Card>
                    <Header>
                        <HeaderLeft>
                            {armor.name}
                            <Score>+{armor.characterMods.armorScore} armor</Score>
                        </HeaderLeft>
                        <Button onClick={handleRemoveClick} color="rgba(200,200,200,0.3)">X</Button>
                    </Header>
                    {armorFeatureInfo ? (
                        <Row>
                            {armorFeatureInfo.name}: {armorFeatureInfo.desc}
                        </Row>
                    ) : undefined}
                </Card>
            ) : (
                <Button onClick={handleEdit}>Add Armor</Button>
            )
        )
    )
}

const Container = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const HeaderLeft = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const Card = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 255, 0.2);
    padding: 3px;
    border-radius: 5px;
`

const Score = styled.span`
    font-size: 13px;
`

const Row = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 13px;
`

export default ArmorCard;