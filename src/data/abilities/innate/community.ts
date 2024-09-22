import { AbilityInfo, CommunityAbility } from "../../../apps/Shared/Types";

export const communityAbilityData: {[ability: number]: AbilityInfo} = {
    [CommunityAbility.LIGHTFOOT]: {
        name: 'Lightfoot',
        id: CommunityAbility.LIGHTFOOT,
        description: 'Your movement is naturally silent. You have advantage on rolls to move without being heard.',
        rollUpdates: [{
            label: '+Adv to being silent',
            diceToAdd: [{
                dieName: 'Adv',
                count: 1,
            }]
        }]
    },
    [CommunityAbility.NOMADIC_PACK]: {
        name: 'Nomadic Pack',
        id: CommunityAbility.NOMADIC_PACK,
        description: 'Add a Nomadic Pack to your inventory. Once per session, you can spend a Hope to reach into this pack and pull out a common item that is useful to the situation. Work with the GM to ﬁgure out what this item is.',
        costs: [{
            label: 'Pay 1 Hope',
            hope: -1,
        }],
        uses: {
            count: 1,
            per: 'Per Session',
        },
        defaultState: {
            u: 0,
        }
    }
}

