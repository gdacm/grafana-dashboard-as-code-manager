import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const ThresholdStyle = defineGrafanaItemClass('ThresholdStyle', GrafanaItem)
    .defineValue('mode', String)
    .asClass
