import { DomainCardInfo } from "../apps/Shared/Types";
import { ArcanaCardData } from "./domainCards/arcana";
import { BladeCardData } from "./domainCards/blade";
import { BoneCardData } from "./domainCards/bone";
import { CodexCardData } from "./domainCards/codex";
import { GraceCardData } from "./domainCards/grace";
import { MidnightCardData } from "./domainCards/midnight";
import { SageCardData } from "./domainCards/sage";
import { SplendorCardData } from "./domainCards/splendor";
import { ValorCardData } from "./domainCards/valor";

export const DomainCardData: {[ability: number]: DomainCardInfo} = {
    ...ArcanaCardData,
    ...BladeCardData,
    ...BoneCardData,
    ...CodexCardData,
    ...GraceCardData,
    ...MidnightCardData,
    ...SageCardData,
    ...SplendorCardData,
    ...ValorCardData,
}