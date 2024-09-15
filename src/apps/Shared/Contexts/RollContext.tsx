import React, { PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react';
import {DiceToRoll, Die, Roll, Visibility} from '../Types/Roll'
import { useRoomContext } from './RoomContext';
import { usePlayerContext } from './PlayerContext';
import { getCrit, getNotes, getTotal, rollOneType } from '../Utils/rollUtils';
import { findNextOperand, getEmptyRoll } from '../Utils/parseUtils';

type RollContextProps = {
    diceToRoll: DiceToRoll,
    rollableId?: string
    rollLabel?: string;
    rollString?: string;
    isCrit: boolean;
    setIsCrit: (val: boolean) => void;
    setRoll: (id: string, label: string, roll: string) => void;
    updateDie: (dieName: string, count: number) => void;
    executeRoll: () => void;
    clearRoll: () => void;
} 

const RollContext = React.createContext<RollContextProps>({
    diceToRoll: {},
    rollableId: undefined,
    rollLabel: undefined,
    rollString: undefined,
    isCrit: false,
    setIsCrit: () => {},
    setRoll: () => {},
    updateDie: () => {},
    executeRoll: () => {},
    clearRoll: () => {},
});

export const RollProvider:React.FunctionComponent<PropsWithChildren> = ({children}: PropsWithChildren) => {
    const [rollableId, setRollableId] = useState<string | undefined>(undefined);
    const [rollLabel, setRollLabel] = useState<string | undefined>(undefined);
    const [rollString, setRollString] = useState<string | undefined>(undefined);

    const [diceToRoll, setDiceToRoll] = useState<DiceToRoll>(getEmptyRoll())
    const [isCrit, setIsCrit] = useState(false);

    const { rolls, pushRoll } = useRoomContext();
    const {playerName, playerColor} = usePlayerContext();

    useEffect(() => {
        const dice = getEmptyRoll();
        if (!rollString) {
            setDiceToRoll(dice);
            return;
        };
        let toparse = rollString.replace(/ /g,'');

        while (toparse) {
            const operandIdx = findNextOperand(toparse);
            const term = toparse.substring(0, operandIdx);
            toparse = toparse.substring(operandIdx);
            
            const dIdx = term.indexOf('d');
            if (dIdx > 0) {
                // XdY
                const count = parseInt(term.substring(0, dIdx))
                const sides = term.substring(dIdx+1)
                if (sides in dice) {
                    dice[sides] += count;
                } else {
                    dice[sides] = count
                }
            } else {
                // const
                const value = parseInt(term)
                if (value)
                    dice['Mod'] += value;
            }
        }
        setDiceToRoll(dice);
    }, [rollString])

    const clearRoll = () => {
        setDiceToRoll(getEmptyRoll());
        setIsCrit(false);
        setRollableId(undefined);
        setRollLabel(undefined);
        setRollString(undefined);
    }

    const executeRoll = () => {
        const dice: Die[] = [];
        const endDice = [];
        if ('Dual' in diceToRoll) {
            dice.push(...rollOneType('Dual', diceToRoll['Dual']))
            delete diceToRoll['Dual']
        }
        if ('Adv' in diceToRoll) {
            endDice.push(...rollOneType('Adv', diceToRoll['Adv']))
            delete diceToRoll['Adv']
        }
        if ('Dis' in diceToRoll) {
            endDice.push(...rollOneType('Dis', diceToRoll['Dis']))
            delete diceToRoll['Dis']
        }
        for (let dieName of Object.keys(diceToRoll)) {
            dice.push(...rollOneType(dieName, diceToRoll[dieName]))
        }
        dice.push(...endDice);
        if (dice.length > 0) {
            if (isCrit) {
                dice.push(getCrit(dice));
            }
            const total = getTotal(dice)
            const notes = getNotes(dice)
            const roll: Roll = {
                playerName: playerName,
                playerColor: playerColor,
                visibility: Visibility.ALL,
                notes: notes,
                dice: dice,
                total: total,
                label: rollLabel || 'Custom Roll',
            }
            pushRoll(roll);
        }
        clearRoll()
    }

    const setRoll = (id: string, label: string, roll: string) => {
        if (id === rollableId) {
            executeRoll();
        } else {
            setRollableId(id);
            setRollLabel(label);
            setRollString(roll);
        }
    }

    const updateDie = (dieName: string, count: number) => {
        setDiceToRoll({
            ...diceToRoll,
            [dieName]: count,
        })
    }

    const value = useMemo(
        () => ({ diceToRoll, rollableId, rollLabel, rollString, isCrit, setIsCrit, setRoll, updateDie, executeRoll, clearRoll }),
        [diceToRoll, rollableId, rollLabel, rollString, isCrit, playerName, playerColor, rolls],
    );
    return <RollContext.Provider value={value}>
        {children}
    </RollContext.Provider>;
}

export const useRollContext = () => {
    const ctx = useContext(RollContext);

    return ctx;
}


