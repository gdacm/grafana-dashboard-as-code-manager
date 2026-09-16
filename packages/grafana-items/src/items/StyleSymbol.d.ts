import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleSymbol extends GrafanaItem {
    get field(): String;
    setField(field: String): this;
    get fixed(): String;
    setFixed(fixed: String): this;
    get mode(): String;
    setMode(mode: String): this;
}
