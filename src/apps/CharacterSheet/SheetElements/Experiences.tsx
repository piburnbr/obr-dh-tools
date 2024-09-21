import React from 'react';
import styled from 'styled-components';
import { useCharacterContext } from '../../Shared/Contexts/CharacterContext';
import RollUpdate from './RollUpdate';
import { DieUpdate, Experience } from '../../Shared/Types';

const Experiences:React.FunctionComponent = () => {
    const {experiences} = useCharacterContext();

    const getDieUpdate = (experience: Experience):DieUpdate[] => {
        return [{
            dieName: 'Mod',
            count: experience.value,
        }]
    }

    return (
        <Container>
            Experiences
            {experiences?.map((experience, idx) => (
                <RollUpdate key={idx} id={experience.name} dieUpdates={getDieUpdate(experience)}>
                    +{experience.value}: {experience.name}
                </RollUpdate>
            ))}
        </Container>
    )
}

const Container = styled.div`
    font-size: 13px;
    width: 100%;
`

export default Experiences;