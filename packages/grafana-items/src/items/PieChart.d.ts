import { Panel } from "./Panel.js";
import { FieldConfigCustomPieChart } from "./FieldConfigCustomPieChart.js";
import { PanelOptionsPieChart } from "./PanelOptionsPieChart.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PieChart extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomPieChart;
    withCustom(code: (custom: FieldConfigCustomPieChart) => void): this
    withOptions(onWith: (item: PanelOptionsPieChart) => void): this;
    get options(): PanelOptionsPieChart;
}
