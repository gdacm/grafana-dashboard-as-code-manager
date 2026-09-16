import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGaugeReduceOptions extends GrafanaItem {
    initCalcs(): this;
    get calcs(): String[];
    addCalc(calc: String): this;
    withCalcs(onWith: (calcs: String[]) => void): this;
    get fields(): String;
    setFields(fields: String): this;
    get limit(): Number;
    setLimit(limit: Number): this;
    get values(): Boolean;
    setValues(values: Boolean): this;
}
