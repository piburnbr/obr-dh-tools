import { AbilityInfo, CodexAbility } from "../../../apps/Shared/Types";

export const codexAbilityData: {[ability: number]: AbilityInfo} = {
    [CodexAbility.SLUMBER]: {
        name: 'Slumber',
        id: CodexAbility.SLUMBER,
        description: 'Make a Spellcast Roll against a very close target. On a success, the target creature falls into a deep sleep until they take damage or the GM spends Fear to awaken them.',
        rolls: [{
            label: 'to hit',
            rollString: '1dDual + 2', //TODO: Spellcast
        }]
    },
    [CodexAbility.ARCANE_BARRAGE]: {
        name: 'Arcane Barrage',
        id: CodexAbility.ARCANE_BARRAGE,
        description: 'Once per short rest, use an action to spend any number of Hope and shoot magical projectiles that automatically strike an enemy within close range. Roll an amount of d6 equal to the Hope you spent, and deal that much direct magic damage.',
        uses: {
            count: 1,
            per: 'Per Short Rest',
        },
        defaultState: {
            u: 0
        },
        costs: [{
            label: 'Spend 1 Hope (or more)',
            hope: -1,
        }],
        rolls: [{
            label: 'damage',
            rollString: '1d6', //TODO: per hope spent
        }]
    },
    [CodexAbility.TELEPATHY]: {
        name: 'Telepathy',
        id: CodexAbility.TELEPATHY,
        description: 'You may open a line of mental communication with one target you can see. This connection lasts until you use this spell to connect with another creature.',
    },
    [CodexAbility.WILD_FLAME]: {
        name: 'Wild Flame',
        id: CodexAbility.WILD_FLAME,
        description: 'Make a Spellcast Roll against up to three enemies in melee range of you. A flame erupts from your hand, dealing 2d6 magic damage and a Stress to any you succeed against.',
        rolls: [{
            label: 'to hit',
            rollString: '1dDual + 2', //TODO: Spellcast
        }, {
            label: 'damage and 1 Stress',
            rollString: '2d6',
        }]
    },
    [CodexAbility.MAGIC_HAND]: {
        name: 'Magic Hand',
        id: CodexAbility.MAGIC_HAND,
        description: 'You can reach out with a magical hand the same size and strength as your own to anywhere within far range of you.',
    },
    [CodexAbility.MYSTERIOUS_MIST]: {
        name: 'Mysterious Mist',
        id: CodexAbility.MYSTERIOUS_MIST,
        description: 'Use an action to spend a Hope and cast a temporary, thick fog that encircles a stationary area up to very close range your current location. Everyone within is Hidden to anybody outside the fog.',
        costs: [{
            label: 'Spend 1 Hope',
            hope: -1,
        }]
    }
}

