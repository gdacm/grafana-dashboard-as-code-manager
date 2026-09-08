import { Panel } from "./Panel.js";
import { FieldConfigCustomBarChart } from "./FieldConfigCustomBarChart.js";
import { PanelOptionsBarChart } from "./PanelOptionsBarChart.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class BarChart extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomBarChart;
    withCustom(code: (custom: FieldConfigCustomBarChart) => void): this
    setNewOptions(onNewCreated: ((item: PanelOptionsBarChart) => PanelOptionsBarChart) | undefined): this;
    withOptions(onWith: (item: PanelOptionsBarChart) => void): this;
    get options(): PanelOptionsBarChart;
    setThresholdsStyleArea(): this
}
