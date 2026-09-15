import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PieChartLegendOptions } from "./PieChartLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

export const PanelOptionsPieChart = defineGrafanaItemClass('PanelOptionsPieChart', PanelOptions)
    .defineArray('displayLabels', String)
    .defineGrafanaObject('legend', PieChartLegendOptions)
    .defineValue('pieType', String)
    .defineValue('sort', String)
    .defineGrafanaObject('tooltip', VizTooltipOptions)
    .asClass
