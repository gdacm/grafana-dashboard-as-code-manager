import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class VizTooltipOptions extends GrafanaItem {
    get hideZeros(): Boolean;
    setHideZeros(hideZeros: Boolean): this;
    get maxHeight(): Number;
    setMaxHeight(maxHeight: Number): this;
    get maxWidth(): Number;
    setMaxWidth(maxWidth: Number): this;
    get mode(): String;
    setMode(mode: String): this;
    get sort(): String;
    setSort(sort: String): this;
}
