import { DiceToRoll } from "../Types";


export const getEmptyRoll = ():DiceToRoll => ({
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0,
    100: 0,
    Dual: 0,
    Adv: 0,
    Dis: 0,
    Mod: 0,
})

export const findNextOperand = (input: string): number => {
    const nextPlus = input.indexOf('+',1);
    const nextMinus = input.indexOf('-',1);
    if (nextPlus === -1 && nextMinus === -1) {
        return input.length;
    } else if (nextPlus === -1) {
        return nextMinus;
    } else if (nextMinus === -1) {
        return nextPlus;
    } else {
        return Math.min(nextPlus, nextMinus);
    }
}