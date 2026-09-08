import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const ScaleDistribution = defineGrafanaItemClass('ScaleDistribution', GrafanaItem)
    .defineValue('type', String)
    .asClass
