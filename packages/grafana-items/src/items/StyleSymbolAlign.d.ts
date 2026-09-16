import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleSymbolAlign extends GrafanaItem {
    get horizontal(): String;
    setHorizontal(horizontal: String): this;
    get vertical(): String;
    setVertical(vertical: String): this;
}
