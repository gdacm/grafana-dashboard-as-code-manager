import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleSize extends GrafanaItem {
    setFixed(fixed: Number): this;
    setMax(max: Number): this;
    setMin(min: Number): this;
}
