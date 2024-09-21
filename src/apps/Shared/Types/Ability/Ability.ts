import { AncestryAbility, CommunityAbility, ClasAbility, SubclasAbility, ArcanaAbility, BladeAbility, BoneAbility, CodexAbility, GraceAbility, MidnightAbility, SageAbility, SplendorAbility, ValorAbility } from "."

type InnateAbility = AncestryAbility | CommunityAbility | ClasAbility | SubclasAbility
type DomainAbility = ArcanaAbility | BladeAbility | BoneAbility | CodexAbility
    | GraceAbility | MidnightAbility | SageAbility | SplendorAbility | ValorAbility

export type  Ability = InnateAbility | DomainAbility

/**
 * Enum rules:
 *  1000: Ancestry
 *  2000: Community
 *  3000: Clas
 *  4000: Subclas
 * 10000: Arcana Domain
 * 11000: Blade Domain
 * 12000: Bone Domain
 * 13000: Codex Domain
 * 14000: Grace Domain
 * 15000: Midnight Domain
 * 16000: Sage Domain
 * 17000: Splendor Domain
 * 18000: Valor Domain
 */