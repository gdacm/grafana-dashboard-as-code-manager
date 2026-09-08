import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleSymbol extends GrafanaItem {
    setField(field: String): this;
    setFixed(fixed: String): this;
    setMode(mode: String): this;
}
