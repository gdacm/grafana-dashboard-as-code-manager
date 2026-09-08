import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapControls extends GrafanaItem {
    setMouseWheelZoom(mouseWheelZoom: Boolean): this;
    setShowAttribution(showAttribution: Boolean): this;
    setShowDebug(showDebug: Boolean): this;
    setShowMeasure(showMeasure: Boolean): this;
    setShowScale(showScale: Boolean): this;
    setShowZoom(showZoom: Boolean): this;
}
