import { AbilityInfo, ArcanaAbility } from "../../../apps/Shared/Types";

export const arcanaAbilityData: {[ability: number]: AbilityInfo} = {
    [ArcanaAbility.RUNE_WARD]: {
        name: "Rune Ward",
        id: ArcanaAbility.RUNE_WARD,
        description: '',
    },
    [ArcanaAbility.UNLEASH_CHAOS]: {
        name: "Unleash Chaos",
        id: ArcanaAbility.UNLEASH_CHAOS,
        description: 'At the beginning of a session, place a number of tokens equal to your Spellcast Trait on this card. \nYou can make a Spellcast Roll against a target within far range and spend any number of tokens to channel raw energy from within yourself and unleash against them. On a success, roll a number of d10 equal to the tokens you spent, and do that much magic damage to the target. Mark a Stress to replenish this card with tokens, up to your Spellcast Trait. Clear all tokens at the end of the session.',
        uses: {
            count: 2,
            per: 'Per Session',
        },
        defaultState: {
            u: 0
        },
        rolls: [{
            label: 'to hit',
            rollString: '1dDual + 2', //TODO: Spellcast
        }, {
            label: 'damage',
            rollString: '1d10' //TODO: Count uses
        }],
        costs: [{
            label: 'Mark 1 Stress: Refresh uses',
            stress: 1,
        }]
    }
}

