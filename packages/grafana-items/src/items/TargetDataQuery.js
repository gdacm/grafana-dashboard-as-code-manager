import { Target } from "./Target.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const TargetDataQuery = defineGrafanaItemClass('TargetDataQuery', Target)
    .defineValue('refId', String)
    .asClass
