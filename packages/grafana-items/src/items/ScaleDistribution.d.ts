import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class ScaleDistribution extends GrafanaItem {
    get type(): String;
    setType(type: String): this;
}
