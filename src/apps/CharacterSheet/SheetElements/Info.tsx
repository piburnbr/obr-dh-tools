import React, {useMemo} from 'react';
import styled from 'styled-components';

import { useCharacterContext } from '../../Shared/Contexts/CharacterContext';

const Info:React.FunctionComponent = () => {
    const {myCharacter, clas, subclas, ancestry1, ancestry2, community} = useCharacterContext();

    const splitAncestry = useMemo(() => ancestry1 !== ancestry2, [ancestry1, ancestry2])

    return (
        <Container>
            <Row>
                {myCharacter?.level} &middot; {clas?.name} &middot; {subclas?.name}
            </Row>
            <Row>
                {ancestry1?.name}{splitAncestry && <>-{ancestry2?.name}</>} &middot; {community?.name}
            </Row>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    display: flex;
`

export default Info;