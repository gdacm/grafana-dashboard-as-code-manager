import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleColor extends GrafanaItem {
    get fixed(): String;
    setFixed(fixed: String): this;
}
