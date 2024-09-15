import React from 'react';

import Button from '../Shared/Button';
import { useRollContext } from '../Shared/Contexts/RollContext';

type Props = {
    dieName: string,
    label: string;
    color?: string;
    image?: string;
    max?: number;
    min?: number;
}

const DieButton: React.FunctionComponent<Props> = ({dieName, label, color, image, max=20, min=-20}: Props) => {
    const { diceToRoll, updateDie } = useRollContext();
    const val = diceToRoll[dieName]
    const onClick = () => {
        updateDie(dieName, Math.min(max, val + 1))
    }
    const onRightClick = () => {
        updateDie(dieName, Math.max(min, val - 1))
    }
    return (
        <Button onClick={onClick} onRightClick={onRightClick} badgeText={val ? val.toString() : undefined} color={color} image={image} opaque={!val}>
            {label}
        </Button>
    )
}

export default DieButton;