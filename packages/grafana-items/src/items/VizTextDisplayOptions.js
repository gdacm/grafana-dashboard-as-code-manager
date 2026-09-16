import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const VizTextDisplayOptions = defineGrafanaItemClass('VizTextDisplayOptions', GrafanaItem)
    .defineValue('percentSize', Number)
    .defineValue('titleSize', Number)
    .defineValue('valueSize', Number)
    .asClass;
