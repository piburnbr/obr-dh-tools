import { Die, Visibility } from ".";

export type Roll = {
    playerName: string;
    playerColor: string;
    visibility: Visibility;
    notes: string;
    dice: Die[];
    total: number;
    label: string;
}
