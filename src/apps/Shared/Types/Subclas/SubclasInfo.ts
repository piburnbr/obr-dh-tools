import { Ability, Subclas } from "..";
import { StatAttribute } from "../../Utils/statUtils";

export type SubclasInfo = {
    name: string;
    id: Subclas;
    spellcast?: StatAttribute;
    foundation: Ability[],
    specialization: Ability[],
    mastery: Ability[],
}