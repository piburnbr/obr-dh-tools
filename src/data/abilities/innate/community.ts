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
    }
}

