import React from 'react';
import styled from 'styled-components';
import Button from '../Shared/Button';
import { useCharacterContext } from '../Shared/Contexts/CharacterContext';
import { AbilityCard, ArmorCard, Attribute, Experiences, Info, Meter, Weapons } from './SheetElements';

type Props = {
    toggleEdit: () => void;
}

const Sheet: React.FunctionComponent<Props> = ({toggleEdit}: Props) => {
    const { myCharacter, name, pickCharacter, maxHp, maxStress, maxArmor, maxHope, evasion, majorThreshold, severeThreshold, armorScore, attrs, abilities, abilityState } = useCharacterContext();

    const handleEdit = () => {
        toggleEdit();
    }

    const handleBack = () => {
        pickCharacter(undefined);
    }

    if (!myCharacter) return (
        <Button onClick={handleBack}>Back</Button>
    )

    return (
        <Container>
            <Fixed>
                <Block>
                    <TopRow>
                        <Name>{name}</Name>
                        <div>
                            <Button onClick={handleEdit}>Edit</Button>
                            <Button onClick={handleBack}>Back</Button>
                        </div>
                    </TopRow>
                    <InfoRow>
                        <Info />
                    </InfoRow>
                </Block>
                <Block>
                    <Meter label="HP" color={"red"} attr="hp" max={maxHp} />
                    <Meter label="Stress" color={"orange"} attr="stress" max={maxStress} />
                    <Meter label="Hope" color={"gold"} attr="hope"max={maxHope} />
                </Block>
            </Fixed>
            <Scrollable>
                <Block>
                    Evasion: {evasion} <br/>
                    <ThresholdRow>
                        <DamageLevel>
                            Minor (1)
                        </DamageLevel>
                        <Threshold>
                            {majorThreshold}
                        </Threshold>
                        <DamageLevel>
                            Major (2)
                        </DamageLevel>
                        <Threshold>
                            {severeThreshold}
                        </Threshold>
                        <DamageLevel>
                            Severe (3)
                        </DamageLevel>
                    </ThresholdRow>
                    <Row>
                        Armor Score: {armorScore}
                    </Row>
                    <Row>
                        <Meter label="Armor" color={"lightgray"} attr="armor" max={maxArmor} />
                    </Row>
                </Block>

                <Divider />

                <Block>
                    <Row>
                        <Attribute name="Agility" value={attrs.agility} />
                        <Attribute name="Strength" value={attrs.strength} />
                        <Attribute name="Finesse" value={attrs.finesse} />
                    </Row>
                    <Row>
                        <Attribute name="Instinct" value={attrs.instinct} />
                        <Attribute name="Presence" value={attrs.presence} />
                        <Attribute name="Knowledge" value={attrs.knowledge} />
                    </Row>
                    <Experiences />
                </Block>

                <Divider />

                <Block>
                    <ArmorCard />
                    <Weapons />
                </Block>

                <Divider />

                <Block>

                    {abilities.map((ability, idx) => (
                        <AbilityCard key={idx} ability={ability} state={abilityState[ability.id]}/>
                    ))}
                </Block>
            </Scrollable>
        </Container>
    )
}

const Name = styled.div`
    font-size: 20px;
`

const ThresholdRow = styled.div`
    display: flex;
    align-items: center;
`

const DamageLevel = styled.div`
    width: 70px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 1px 0;
    border-color: black;
    border-style: solid;
    font-size: 13px;

`
const Threshold = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: rgba(200,200,200,0.2);
    font-size: 16px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const Fixed = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid gray;
`

const Scrollable = styled.div`
    padding: 8px 10px 0 5px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: gray transparent;
    scrollbar-gutter: stable;
`

const Block = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`

const Row = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
`

const InfoRow = styled.div`
    display:flex;
    gap: 10px;
    width: 100%;
    font-size: 13px;
`

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Divider = styled.div`
    height: 0;
    width: 100%;
    border-bottom: 1px solid gray;
`

export default Sheet
