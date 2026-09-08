import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class HideFrom extends GrafanaItem {
    setLegend(legend: Boolean): this;
    setTooltip(tooltip: Boolean): this;
    setViz(viz: Boolean): this;
}
