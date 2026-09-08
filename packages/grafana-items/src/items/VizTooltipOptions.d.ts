import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class VizTooltipOptions extends GrafanaItem {
    setHideZeros(hideZeros: Boolean): this;
    setMaxHeight(maxHeight: Number): this;
    setMaxWidth(maxWidth: Number): this;
    setMode(mode: String): this;
    setSort(sort: String): this;
}
