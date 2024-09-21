import React, {useState} from "react";
import Button from "../Shared/Button";
import { useCharacterContext } from "../Shared/Contexts/CharacterContext";
import { useRoomContext } from "../Shared/Contexts/RoomContext";
import styled from "styled-components";
import { Ancestry, Attribute, Clas, Community, DomainCards, Experiences, Name, Subclas } from "./EditorElements";


type Props = {
    toggleEdit: () => void;
}

const Editor:React.FunctionComponent<Props> = ({toggleEdit}: Props) => {
    const { myCharacter, name, clas, subclas, ancestry1, ancestry2, community, attrs, domainCards, experiences } = useCharacterContext();
    const {updateCharacter} = useRoomContext();

    const [newName, setNewName] = useState(name)
    const [newClas, setNewClas] = useState(clas)
    const [newSubclas, setNewSubclas] = useState(subclas);
    const [newAncestry1, setNewAncestry1] = useState(ancestry1);
    const [newAncestry2, setNewAncestry2] = useState(ancestry2);
    const [newCommunity, setNewCommunity] = useState(community);

    const [newAgl, setNewAgl] = useState(attrs.agility);
    const [newStr, setNewStr] = useState(attrs.strength);
    const [newFin, setNewFin] = useState(attrs.finesse);
    const [newIns, setNewIns] = useState(attrs.instinct);
    const [newPre, setNewPre] = useState(attrs.presence);
    const [newKno, setNewKno] = useState(attrs.knowledge);

    const [newExperiences, setNewExperiences] = useState(experiences);

    const [newDomainCards, setNewDomainCards] = useState(domainCards);

    if (!myCharacter) return undefined;

    const handleSave = () => {
        const newCharacter = {...myCharacter}
        newCharacter.name = newName;
        if (newClas) newCharacter.clas = newClas.id;
        if (newSubclas) newCharacter.subclas = newSubclas.id;
        if (newAncestry1) newCharacter.ancestry1 = newAncestry1.id;
        if (newAncestry2) newCharacter.ancestry2 = newAncestry2.id;
        if (newCommunity) newCharacter.community = newCommunity.id;

        newCharacter.attr.agility = newAgl;
        newCharacter.attr.strength = newStr;
        newCharacter.attr.finesse = newFin;
        newCharacter.attr.instinct = newIns;
        newCharacter.attr.presence = newPre;
        newCharacter.attr.knowledge = newKno;

        if (newExperiences) newCharacter.ex = newExperiences;

        if (newDomainCards) newCharacter.dC = newDomainCards?.map((domainCard) => domainCard.id);
        updateCharacter(newCharacter);
        toggleEdit();
    }

    const handleCancel = () => {
        toggleEdit();
    }

    return (
        <Container>
            <Block>
                <Row>
                    Name:
                    <Name value={newName} setValue={setNewName} />
                </Row>
                <Row>
                    <Note>(Name must match character token for HP display to work)</Note>
                </Row>
            </Block>
            <Block>
                <Row>
                    Ancestry:
                    <Ancestry value={newAncestry1} setValue={setNewAncestry1} />
                    <Ancestry value={newAncestry2} setValue={setNewAncestry2} />
                </Row>
                <Row>
                    Community:
                    <Community value={newCommunity} setValue={setNewCommunity} />
                </Row>
            </Block>
            <Block>
                <Row>
                    Class:
                    <Clas value={newClas} setValue={setNewClas} />
                    <Subclas value={newSubclas} setValue={setNewSubclas} clas={newClas} />

                </Row>
            </Block>
            <Block>
                <AttrRow>
                    Agility
                    <Attribute value={newAgl} setValue={setNewAgl} />
                </AttrRow>
                <AttrRow>
                    Strength
                    <Attribute value={newStr} setValue={setNewStr} />
                </AttrRow>
                <AttrRow>
                    Finesse
                    <Attribute value={newFin} setValue={setNewFin} />
                </AttrRow>
                <AttrRow>
                    Instinct
                    <Attribute value={newIns} setValue={setNewIns} />
                </AttrRow>
                <AttrRow>
                    Presence
                    <Attribute value={newPre} setValue={setNewPre} />
                </AttrRow>
                <AttrRow>
                    Knowledge
                    <Attribute value={newKno} setValue={setNewKno} />
                </AttrRow>
                <Row>
                    <Note>Distribute these: one 2, two 1's, two 0's, and a -1</Note>
                </Row>
            </Block>
            <Divider />
            <Block>
                Experiences
                <Experiences value={newExperiences} setValue={setNewExperiences}/>
            </Block>
            <Divider />
            <Block>
                Domain Cards
                <DomainCards value={newDomainCards} setValue={setNewDomainCards}/>
            </Block>
            <Block>
                <Row>
                    <Button color="green" onClick={handleSave}>Save</Button>
                    <Button color="gray" onClick={handleCancel}>Cancel</Button>
                </Row>
            </Block>
        </Container>
    )
}

const Divider = styled.div`
    height: 0;
    border-bottom: 1px solid gray;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;;
    font-size:16px;
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Row = styled.div`
    display: flex;
    gap: 5px;
`

const AttrRow = styled.div`
    display: flex;
    width: 130px;
    justify-content: space-between;
`

const Note = styled.span`
    font-size:12px
`

export default Editor;