import { PanelOptions } from "./PanelOptions.js";
import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTextDisplayOptions } from "./VizTextDisplayOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsBarChart extends PanelOptions {
    setBarRadius(barRadius: Number): this;
    setBarWidth(barWidth: Number): this;
    setColorByField(colorByField: String): this;
    setFullHighlight(fullHighlight: Boolean): this;
    setGroupWidth(groupWidth: Number): this;
    setLegend(legend: VizLegendOptions): this;
    setNewLegend(onNewCreated: ((item: VizLegendOptions) => VizLegendOptions) | undefined): this;
    withLegend(onWith: (item: VizLegendOptions) => void): this;
    get legend(): VizLegendOptions;
    setOrientation(orientation: String): this;
    setShowValue(showValue: String): this;
    setStacking(stacking: String): this;
    setText(text: VizTextDisplayOptions): this;
    setNewText(onNewCreated: ((item: VizTextDisplayOptions) => VizTextDisplayOptions) | undefined): this;
    withText(onWith: (item: VizTextDisplayOptions) => void): this;
    get text(): VizTextDisplayOptions;
    setTooltip(tooltip: VizTooltipOptions): this;
    setNewTooltip(onNewCreated: ((item: VizTooltipOptions) => VizTooltipOptions) | undefined): this;
    withTooltip(onWith: (item: VizTooltipOptions) => void): this;
    get tooltip(): VizTooltipOptions;
    setXField(xField: String): this;
    setXTickLabelMaxLength(xTickLabelMaxLength: Number): this;
    setXTickLabelRotation(xTickLabelRotation: Number): this;
    setXTickLabelSpacing(xTickLabelSpacing: Number): this;
}
