import { PanelOptions } from "./PanelOptions.js";
import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTextDisplayOptions } from "./VizTextDisplayOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsBarChart extends PanelOptions {
    get barRadius(): Number;
    setBarRadius(barRadius: Number): this;
    get barWidth(): Number;
    setBarWidth(barWidth: Number): this;
    get colorByField(): String;
    setColorByField(colorByField: String): this;
    get fullHighlight(): Boolean;
    setFullHighlight(fullHighlight: Boolean): this;
    get groupWidth(): Number;
    setGroupWidth(groupWidth: Number): this;
    setLegend(legend: VizLegendOptions): this;
    setNewLegend(onNewCreated: ((item: VizLegendOptions) => VizLegendOptions) | undefined): this;
    withLegend(onWith: (item: VizLegendOptions) => void): this;
    get legend(): VizLegendOptions;
    get orientation(): String;
    setOrientation(orientation: String): this;
    get showValue(): String;
    setShowValue(showValue: String): this;
    get stacking(): String;
    setStacking(stacking: String): this;
    setText(text: VizTextDisplayOptions): this;
    setNewText(onNewCreated: ((item: VizTextDisplayOptions) => VizTextDisplayOptions) | undefined): this;
    withText(onWith: (item: VizTextDisplayOptions) => void): this;
    get text(): VizTextDisplayOptions;
    setTooltip(tooltip: VizTooltipOptions): this;
    setNewTooltip(onNewCreated: ((item: VizTooltipOptions) => VizTooltipOptions) | undefined): this;
    withTooltip(onWith: (item: VizTooltipOptions) => void): this;
    get tooltip(): VizTooltipOptions;
    get xField(): String;
    setXField(xField: String): this;
    get xTickLabelMaxLength(): Number;
    setXTickLabelMaxLength(xTickLabelMaxLength: Number): this;
    get xTickLabelRotation(): Number;
    setXTickLabelRotation(xTickLabelRotation: Number): this;
    get xTickLabelSpacing(): Number;
    setXTickLabelSpacing(xTickLabelSpacing: Number): this;
}
