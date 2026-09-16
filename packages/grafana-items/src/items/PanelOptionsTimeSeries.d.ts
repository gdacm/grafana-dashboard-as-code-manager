import { PanelOptions } from "./PanelOptions.js";
import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsTimeSeries extends PanelOptions {
    get disableKeyboardEvents(): Boolean;
    setDisableKeyboardEvents(disableKeyboardEvents: Boolean): this;
    setLegend(legend: VizLegendOptions): this;
    setNewLegend(onNewCreated: ((item: VizLegendOptions) => VizLegendOptions) | undefined): this;
    withLegend(onWith: (item: VizLegendOptions) => void): this;
    get legend(): VizLegendOptions;
    get orientation(): String;
    setOrientation(orientation: String): this;
    setTooltip(tooltip: VizTooltipOptions): this;
    setNewTooltip(onNewCreated: ((item: VizTooltipOptions) => VizTooltipOptions) | undefined): this;
    withTooltip(onWith: (item: VizTooltipOptions) => void): this;
    get tooltip(): VizTooltipOptions;
}
