import { VizLegendOptions } from "./VizLegendOptions.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PieChartLegendOptions extends VizLegendOptions {
    initValues(): this;
    get values(): String[];
    addValue(value: String): this;
    addNewValue(onNewCreated: (item: String) => String): this;
    withValues(onWith: (values: String[]) => void): this;
}
