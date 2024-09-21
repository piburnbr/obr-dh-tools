import { Ability, AbilityInfo } from "../../apps/Shared/Types";
import { Character } from "../../apps/Shared/Types/Character/Character";
import { arcanaAbilityData } from "./domain/arcana";
import { bladeyAbilityData } from "./domain/blade";
import { boneAbilityData } from "./domain/bone";
import { codexAbilityData } from "./domain/codex";
import { graceAbilityData } from "./domain/grace";
import { midnightAbilityData } from "./domain/midnight";
import { sageAbilityData } from "./domain/sage";
import { splendorAbilityData } from "./domain/splendor";
import { valorAbilityData } from "./domain/valor";
import { ancestryAbilityData } from "./innate/ancestry";
import { clasAbilityData } from "./innate/clas";
import { communityAbilityData } from "./innate/community";
import { subclasAbilityData } from "./innate/subclas";

export const getAbState = (c: Character, ab: Ability) => {
    return ab in c.abState ? c.abState[ab] : undefined;
}

export const abilityData: {[ability: number]: AbilityInfo} = {
    ...ancestryAbilityData,
    ...communityAbilityData,
    ...clasAbilityData,
    ...subclasAbilityData,
    
    ...arcanaAbilityData,
    ...bladeyAbilityData,
    ...boneAbilityData,
    ...codexAbilityData,
    ...graceAbilityData,
    ...midnightAbilityData,
    ...sageAbilityData,
    ...splendorAbilityData,
    ...valorAbilityData,
}