import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { PieChartLegendOptions } from "./PieChartLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

export const PanelOptionsPieChart = defineGrafanaItemClass('PanelOptionsPieChart', PanelOptions)
    .defineBasicArray('displayLabels', String)
    .defineGrafanaObject('legend', PieChartLegendOptions)
    .defineValue('pieType', String)
    .defineValue('sort', String)
    .defineGrafanaObject('tooltip', VizTooltipOptions)
    .asClass
