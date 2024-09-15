export enum Ability {
    GUARDIAN_HOPE = 1,
    UNSTOPPABLE,
}

export type AbilityCost = {
    label: string;
    hp?: number;
    stress?: number;
    armor?: number
    hope?: number;
}

type AbilityInfo = {
    name: string;
    uses?: {
        count: number;
        per: 'short' | 'long' | 'session';
    };
    costs?: AbilityCost[];
    rolls?: {
        label: string;
        rollString: string;
    }[]
}

export const abilityData: {[ability: number]: AbilityInfo} = {
    [Ability.GUARDIAN_HOPE]: {
        name: "Guardian Hope",
        costs: [{
            label: 'Spend 3 Hope',
            hope: -3,
        }, {
            label: 'Clear 3 Armor',
            armor: -3,
        }],
    },
    [Ability.UNSTOPPABLE]: {
        name: "Unstoppable",
        uses: {
            count: 1,
            per: 'long',
        }
    }
}