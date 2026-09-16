import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Color extends GrafanaItem {
    get mode(): String;
    setMode(mode: String): this;
}
