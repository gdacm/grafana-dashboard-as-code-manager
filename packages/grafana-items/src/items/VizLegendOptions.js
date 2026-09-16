import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const VizLegendOptions = defineGrafanaItemClass('VizLegendOptions', GrafanaItem)
    .defineValue('asTable', Boolean)
    .defineBasicArray('calcs', String)
    .defineValue('displayMode', String)
    .defineValue('isVisible', Boolean)
    .defineValue('limit', Number)
    .defineValue('overflow', String)
    .defineValue('placement', String)
    .defineValue('showLegend', Boolean)
    .defineValue('sortBy', String)
    .defineValue('sortDesc', Boolean)
    .defineValue('width', Number)
    .asClass
