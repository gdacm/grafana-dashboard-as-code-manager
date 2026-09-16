import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class OverrideMatcherOptionsByNames extends GrafanaItem {
    setMode(mode: String): this;
    initNames(): this;
    get names(): String[];
    addName(name: String): this;
    withNames(onWith: (names: String[]) => void): this;
    setPrefix(prefix: String): this;
    setReadOnly(readOnly: Boolean): this;
}
