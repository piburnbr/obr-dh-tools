import { Ability, Cost, CustomEffect } from ".";
import { Character, CharacterMod, DieUpdate } from "..";

export type AbilityInfo = {
    name: string;
    id: Ability;
    description: string;
    uses?: {
        count: number;
        per: 'Per Short Rest' | 'Per Long Rest' | 'Per session';
    };
    costs?: Cost[];
    rolls?: {
        label: string;
        rollString: string;
    }[];
    rollUpdates?: {
        label: string;
        diceToAdd: DieUpdate[]
    }[];
    customButtons?: CustomEffect[];
    characterMods?: CharacterMod;
    getCharacterMod?: (char: Character) => CharacterMod;
    defaultState?: any;
}