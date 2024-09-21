import { Ability, Ancestry } from "..";

export type AncestryInfo = {
    name: string;
    id: Ancestry;
    primaryAbilities: Ability[],
    secondaryAbilities: Ability[],
}