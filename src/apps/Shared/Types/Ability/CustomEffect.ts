import { Character } from "..";

export type CustomEffect = {
    label: string;
    handler: (c: Character, s: any) => void;
}