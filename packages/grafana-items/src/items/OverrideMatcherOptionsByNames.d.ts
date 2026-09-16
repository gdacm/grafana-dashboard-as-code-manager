import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class OverrideMatcherOptionsByNames extends GrafanaItem {
    get mode(): String;
    setMode(mode: String): this;
    initNames(): this;
    get names(): String[];
    addName(name: String): this;
    withNames(onWith: (names: String[]) => void): this;
    get prefix(): String;
    setPrefix(prefix: String): this;
    get readOnly(): Boolean;
    setReadOnly(readOnly: Boolean): this;
}
