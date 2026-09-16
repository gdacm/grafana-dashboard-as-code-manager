import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleSize extends GrafanaItem {
    get fixed(): Number;
    setFixed(fixed: Number): this;
    get max(): Number;
    setMax(max: Number): this;
    get min(): Number;
    setMin(min: Number): this;
}
