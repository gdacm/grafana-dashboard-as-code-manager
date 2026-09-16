import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapControls extends GrafanaItem {
    get mouseWheelZoom(): Boolean;
    setMouseWheelZoom(mouseWheelZoom: Boolean): this;
    get showAttribution(): Boolean;
    setShowAttribution(showAttribution: Boolean): this;
    get showDebug(): Boolean;
    setShowDebug(showDebug: Boolean): this;
    get showMeasure(): Boolean;
    setShowMeasure(showMeasure: Boolean): this;
    get showScale(): Boolean;
    setShowScale(showScale: Boolean): this;
    get showZoom(): Boolean;
    setShowZoom(showZoom: Boolean): this;
}
