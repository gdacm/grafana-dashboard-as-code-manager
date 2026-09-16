import { GrafanaItem } from "./GrafanaItem.js";
import { PanelOptionsGeomapLayerConfig } from "./PanelOptionsGeomapLayerConfig.js";
import { PanelOptionsGeomapLayerLocation } from "./PanelOptionsGeomapLayerLocation.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapLayer extends GrafanaItem {
    setConfig(config: PanelOptionsGeomapLayerConfig): this;
    setNewConfig(onNewCreated: ((item: PanelOptionsGeomapLayerConfig) => PanelOptionsGeomapLayerConfig) | undefined): this;
    withConfig(onWith: (item: PanelOptionsGeomapLayerConfig) => void): this;
    get config(): PanelOptionsGeomapLayerConfig;
    setLocation(location: PanelOptionsGeomapLayerLocation): this;
    setNewLocation(onNewCreated: ((item: PanelOptionsGeomapLayerLocation) => PanelOptionsGeomapLayerLocation) | undefined): this;
    withLocation(onWith: (item: PanelOptionsGeomapLayerLocation) => void): this;
    get location(): PanelOptionsGeomapLayerLocation;
    get name(): String;
    setName(name: String): this;
    get tooltip(): Boolean;
    setTooltip(tooltip: Boolean): this;
    get type(): String;
    setType(type: String): this;
}
