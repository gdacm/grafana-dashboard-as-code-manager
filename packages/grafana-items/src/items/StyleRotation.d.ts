import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleRotation extends GrafanaItem {
    get fixed(): Number;
    setFixed(fixed: Number): this;
    get max(): Number;
    setMax(max: Number): this;
    get min(): Number;
    setMin(min: Number): this;
    get mode(): String;
    setMode(mode: String): this;
}
