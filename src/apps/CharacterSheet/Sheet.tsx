import React from 'react';
import styled from 'styled-components';
import Meter from './SheetElements/Meter';
import Attribute from './SheetElements/Attribute';
import Button from '../Shared/Button';
import { useRoomContext } from '../Shared/Contexts/RoomContext';
import Name from './SheetElements/Name';
import ClasDisplay from './SheetElements/ClasDisplay';
import CommunityDisplay from './SheetElements/CommunityDisplay';
import AncestryDisplay from './SheetElements/AncestryDisplay';
import LevelDisplay from './SheetElements/LevelDisplay';

type Props = {
}

const Sheet: React.FunctionComponent<Props> = () => {
    const { myCharacter, pickCharacter} = useRoomContext();

    const handleBack = () => {
        pickCharacter(undefined);
    }

    if (!myCharacter) return (
        <Button onClick={handleBack}>Back</Button>
    )

    const {
        attr
    } = myCharacter;

    return (
        <Container>
            <Block>
                <TopRow>
                    <Name attr="name" />
                    <Button onClick={handleBack}>Back</Button>
                </TopRow>
                <Row>
                    <LevelDisplay />
                    <ClasDisplay />
                </Row>
                <Row>
                    <AncestryDisplay />
                    <CommunityDisplay />
                </Row>
            </Block>
            
            <Block>
                <Meter label="HP" color={"green"} attr="hp" />
                <Meter label="Stress" color={"orange"} attr="stress" />
                <Meter label="Armor" color={"gray"} attr="armor" />
                <Meter label="Hope" color={"gold"} attr="hope" />
            </Block>

            <Block>
                <Row>
                    <Attribute name="Agility" value={attr.agility} />
                    <Attribute name="Instinct" value={attr.instinct} />
                </Row>
                <Row>
                    <Attribute name="Strength" value={attr.strength} />
                    <Attribute name="Presence" value={attr.presence} />
                </Row>
                <Row>
                    <Attribute name="Finesse" value={attr.finesse} />
                    <Attribute name="Knowledge" value={attr.knowledge} />
                </Row>
            </Block>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items:center;
    width: 100%;
`

const Block = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Row = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export default Sheet
