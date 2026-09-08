import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGaugeReduceOptions extends GrafanaItem {
    initCalcs(): this;
    get calcs(): String[];
    addCalc(calc: String): this;
    addNewCalc(onNewCreated: (item: String) => String): this;
    withCalcs(onWith: (calcs: String[]) => void): this;
    setFields(fields: String): this;
    setLimit(limit: Number): this;
    setValues(values: Boolean): this;
}
