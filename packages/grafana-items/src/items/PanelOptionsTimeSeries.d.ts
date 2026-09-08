import { PanelOptions } from "./PanelOptions.js";
import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsTimeSeries extends PanelOptions {
    setDisableKeyboardEvents(disableKeyboardEvents: Boolean): this;
    setLegend(legend: VizLegendOptions): this;
    withLegend(onWith: (item: VizLegendOptions) => void): this;
    get legend(): VizLegendOptions;
    setOrientation(orientation: String): this;
    setTooltip(tooltip: VizTooltipOptions): this;
    withTooltip(onWith: (item: VizTooltipOptions) => void): this;
    get tooltip(): VizTooltipOptions;
}
