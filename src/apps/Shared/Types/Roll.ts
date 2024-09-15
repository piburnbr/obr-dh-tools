export enum Visibility {
    ALL = "ALL",
    GM = "GM",
    PRIVATE = "PRIVATE",
    PRIVATE_AND_GM = "PRIVATE_AND_GM"
}

export enum DieStyle {
    ADV = "ADV",
    DIS = "DIS",
    HOPE = "HOPE",
    FEAR = "FEAR",
    NORMAL = "NORMAL",
    MOD = "MOD",
    CRIT = "CRIT",
}

export type DieToRoll = {
    sides: number,
    style: DieStyle,
    sign: number,
}

export type DiceToRoll = {
    [sides: string]: number;
}

export type Die = {
    sides: number;
    style: DieStyle,
    result: number;
}

export type Roll = {
    playerName: string;
    playerColor: string;
    visibility: Visibility;
    notes: string;
    dice: Die[];
    total: number;
    label: string;
}