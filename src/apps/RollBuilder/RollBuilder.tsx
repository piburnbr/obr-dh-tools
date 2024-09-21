import React, { useMemo} from 'react';
import styled from'styled-components';

import Button from '../Shared/Button';
import DieButton from './DieButton';
import { useRollContext } from '../Shared/Contexts/RollContext';
import DieInput from './DieInput';

type Props = {
}

const RollBuilder: React.FunctionComponent<Props> = () => {
    const { isCrit, diceToRoll, setIsCrit, clearRoll, executeRoll } = useRollContext();

    const handleCritClick = () => {
        setIsCrit(!isCrit);
    }

    const hasDice = useMemo(() => {
        return Object.keys(diceToRoll).reduce(
            (result, key) => result || diceToRoll[key] > 0,
            false
        )
    }, [diceToRoll])

    return (
        <Container>
            <Buttons>
                <ButtonRow>
                    <DieButton dieName="4" label="4" />
                    <DieButton dieName="6" label="6" />
                    <DieButton dieName="8" label="8" />
                    <DieButton dieName="10" label="10" />
                    <DieButton dieName="12" label="12" />
                    <DieButton dieName="20" label="20" />
                </ButtonRow>
                <ButtonRow>
                    <DieButton dieName="Dual" label="Duality" color="gold" image={"linear-gradient(to bottom right,  gold 30%, cornflowerblue 60%)"} max={1} min={0} />
                    <DieButton dieName="Adv" label="Adv" color="green" min={0} />
                    <DieButton dieName="Dis" label="Dis" color="red" min={0} />
                    <DieButton dieName="100" label="100" />
                </ButtonRow>
                <ButtonRow>
                    <DieInput dieName="Mod" />
                    <Button onClick={handleCritClick} onRightClick={handleCritClick} opaque={!isCrit} color='lightgreen'>
                        Critical Damage!
                    </Button>
                    <Button onClick={clearRoll}>
                        Clear
                    </Button>
                </ButtonRow>
                <Button onClick={executeRoll} opaque={!hasDice} color='lightblue'>
                    --- Roll! ---
                </Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default RollBuilder;