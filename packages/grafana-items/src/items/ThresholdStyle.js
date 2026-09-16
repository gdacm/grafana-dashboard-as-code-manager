import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const ThresholdStyle = defineGrafanaItemClass('ThresholdStyle', GrafanaItem)
    .defineValue('mode', String)
    .asClass
