import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { VizLegendOptions } from "./VizLegendOptions.js";

export const PieChartLegendOptions = defineGrafanaItemClass('PieChartLegendOptions', VizLegendOptions)
    .defineBasicArray('values', String)
    .asClass
