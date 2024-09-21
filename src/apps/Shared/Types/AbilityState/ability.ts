import { ArcanaState } from "./Domain/arcana";
import { BladeState } from "./Domain/blade";
import { BoneState } from "./Domain/bone";
import { CodexState } from "./Domain/codex";
import { GraceState } from "./Domain/grace";
import { MidnightState } from "./Domain/midnight";
import { SageState } from "./Domain/sage";
import { SplendorState } from "./Domain/splendor";
import { ValorState } from "./Domain/valor";
import { AncestryState } from "./Innate/ancestry";
import { ClasState, ClasStateUnstoppable } from "./Innate/clas";
import { CommunityState } from "./Innate/community";
import { SubclasState } from "./Innate/subclas";

export interface AbilityState extends ArcanaState, BladeState, BoneState, CodexState, GraceState, MidnightState, SageState, SplendorState, ValorState, AncestryState, ClasState, CommunityState, SubclasState {}

export type StateType = ClasStateUnstoppable | {}