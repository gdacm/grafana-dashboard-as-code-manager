import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

export const PanelOptionsHistogram = defineGrafanaItemClass('PanelOptionsHistogram', GrafanaItem)
    .defineValue("bucketCount", Number)
    .defineValue("bucketOffset", Number)
    .defineValue("bucketSize", Number)
    .defineValue("combine", Boolean)
    .defineObject("legend", VizLegendOptions)
    .defineObject("tooltip", VizTooltipOptions)
    .asClass
