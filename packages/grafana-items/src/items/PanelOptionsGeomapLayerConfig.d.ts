import { GrafanaItem } from "./GrafanaItem.js";
import { PanelOptionsGeomapLayerConfigStyle } from "./PanelOptionsGeomapLayerConfigStyle.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapLayerConfig extends GrafanaItem {
    setShowLegend(showLegend: Boolean): this;
    setStyle(style: PanelOptionsGeomapLayerConfigStyle): this;
    setNewStyle(onNewCreated: ((item: PanelOptionsGeomapLayerConfigStyle) => PanelOptionsGeomapLayerConfigStyle) | undefined): this;
    withStyle(onWith: (item: PanelOptionsGeomapLayerConfigStyle) => void): this;
    get style(): PanelOptionsGeomapLayerConfigStyle;
}
