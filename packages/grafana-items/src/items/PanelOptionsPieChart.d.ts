import { PanelOptions } from "./PanelOptions.js";
import { PieChartLegendOptions } from "./PieChartLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsPieChart extends PanelOptions {
    initDisplayLabels(): this;
    get displayLabels(): String[];
    addDisplayLabel(displayLabel: String): this;
    withDisplayLabels(onWith: (displayLabels: String[]) => void): this;
    setLegend(legend: PieChartLegendOptions): this;
    setNewLegend(onNewCreated: ((item: PieChartLegendOptions) => PieChartLegendOptions) | undefined): this;
    withLegend(onWith: (item: PieChartLegendOptions) => void): this;
    get legend(): PieChartLegendOptions;
    setPieType(pieType: String): this;
    setSort(sort: String): this;
    setTooltip(tooltip: VizTooltipOptions): this;
    setNewTooltip(onNewCreated: ((item: VizTooltipOptions) => VizTooltipOptions) | undefined): this;
    withTooltip(onWith: (item: VizTooltipOptions) => void): this;
    get tooltip(): VizTooltipOptions;
}
