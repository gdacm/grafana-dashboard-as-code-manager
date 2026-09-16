import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsTableSortBy extends GrafanaItem {
    get desc(): Boolean;
    setDesc(desc: Boolean): this;
    get displayName(): String;
    setDisplayName(displayName: String): this;
}
