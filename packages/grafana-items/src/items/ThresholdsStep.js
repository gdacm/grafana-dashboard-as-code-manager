import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const ThresholdsStep = defineGrafanaItemClass('ThresholdsStep', GrafanaItem)
    .defineValue('value', Number)
    .defineValue('color', String)
    .asClass
