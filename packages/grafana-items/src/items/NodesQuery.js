import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const NodesQuery = defineGrafanaItemClass('NodesQuery', GrafanaItem)
    .defineValue('count', Number)
    .defineValue('seed', Number)
    .defineValue('type', String) // TODO "random" | "random edges" | "response_medium" | "response_small" | "feature_showcase"    
    .asClass
