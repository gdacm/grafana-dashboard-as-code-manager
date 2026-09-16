import { GrafanaItem } from "./GrafanaItem.js";
import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsHistogram extends GrafanaItem {
    get bucketCount(): Number;
    setBucketCount(bucketCount: Number): this;
    get bucketOffset(): Number;
    setBucketOffset(bucketOffset: Number): this;
    get bucketSize(): Number;
    setBucketSize(bucketSize: Number): this;
    get combine(): Boolean;
    setCombine(combine: Boolean): this;
    setLegend(legend: VizLegendOptions): this;
    setNewLegend(onNewCreated: ((item: VizLegendOptions) => VizLegendOptions) | undefined): this;
    withLegend(onWith: (item: VizLegendOptions) => void): this;
    get legend(): VizLegendOptions;
    setTooltip(tooltip: VizTooltipOptions): this;
    setNewTooltip(onNewCreated: ((item: VizTooltipOptions) => VizTooltipOptions) | undefined): this;
    withTooltip(onWith: (item: VizTooltipOptions) => void): this;
    get tooltip(): VizTooltipOptions;
}
