import { ClasAbility } from "../..";

export type ClasStateUnstoppable = {
    v?: number;
}

export interface ClasState {
    [ClasAbility.GUARDIANS_HOPE]? : {},
    [ClasAbility.UNSTOPPABLE]? : ClasStateUnstoppable,
}
