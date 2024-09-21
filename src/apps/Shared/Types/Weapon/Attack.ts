import { StatAttribute } from "../../Utils/statUtils";

export type Attack = {
    damageType: 'Magic' | 'Physical';
    attackTrait: StatAttribute;
    attackBonus?: number;
    damageDie: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
    damageBonus?: number;
    range: 'Melee' | 'Very Close' | 'Close' | 'Far' | 'Very Far';
    dropLowest?: true;
}