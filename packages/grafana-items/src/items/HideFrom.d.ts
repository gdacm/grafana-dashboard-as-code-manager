import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class HideFrom extends GrafanaItem {
    get graph(): Boolean;
    setGraph(graph: Boolean): this;
    get legend(): Boolean;
    setLegend(legend: Boolean): this;
    get tooltip(): Boolean;
    setTooltip(tooltip: Boolean): this;
    get viz(): Boolean;
    setViz(viz: Boolean): this;
}
