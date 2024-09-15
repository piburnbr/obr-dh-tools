import { Die, DieStyle } from "../Types/Roll";


const getStyleForDie = (dieName: string):DieStyle[] => {
    switch(dieName) {
        case 'Mod':
            return [DieStyle.MOD];
        case 'Adv':
            return [DieStyle.ADV];
        case 'Dis':
            return [DieStyle.DIS];
        case 'Dual':
            return [DieStyle.HOPE, DieStyle.FEAR];
        default:
            return [DieStyle.NORMAL];
    }
}

const getSidesForDie = (dieName: string):number => {
    switch(dieName) {
        case 'Mod':
            return 0;
        case 'Adv':
        case 'Dis':
            return 6;
        case 'Dual':
            return 12;
        default:
            return parseInt(dieName);
    }
}

export const getTotal = (dice: Die[]):number => {
    return dice.reduce((total, die) => total+die.result, 0)
}

export const getCrit = (dice: Die[]):Die => {
    return ({
        sides: 0,
        style: DieStyle.CRIT,
        result: dice.reduce((total, die) => total+die.sides, 0)
    })
}

export const getNotes = (dice: Die[]):string => {
    const hope = dice.reduce(
        (max, die) => Math.max(max, die.style === DieStyle.HOPE ? die.result : 0),
        0
    );
    const fear = dice.reduce(
        (max, die) => Math.max(max, die.style === DieStyle.FEAR ? die.result : 0),
        0
    );
    if (hope && fear) {
        if (hope === fear) {
            return 'critical';
        } else if (hope > fear) {
            return 'with Hope';
        } else if (hope < fear) {
            return 'with Fear'
        }
    }
    return '';
}

const rollOneDie = (sides: number) => Math.floor(Math.random() * sides) + 1;

export const rollOneType = (dieName: string, count: number): Die[] => {
    const dice: Die[] = [];
    let sign = count >=0 ? 1 : -1;
    count = Math.abs(count);
    if (dieName === 'Dis') {
        sign = sign * -1;
    }

    const dieSides = getSidesForDie(dieName);
    const dieStyles = getStyleForDie(dieName);

    if (dieName === 'Mod' && count) {
        dice.push({
            sides: 0,
            style: dieStyles[0],
            result: sign * count,
        })
    } else {
        for (let i = 0; i < count; i++) {
            for (let style of dieStyles) {
                dice.push({
                    sides: dieSides,
                    style: style,
                    result: sign * rollOneDie(dieSides)
                })
            }
        }
    }
    return dice;
}