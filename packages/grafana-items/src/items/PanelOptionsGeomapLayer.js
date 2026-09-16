import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { PanelOptionsGeomapLayerConfig } from "./PanelOptionsGeomapLayerConfig.js";
import { PanelOptionsGeomapLayerLocation } from "./PanelOptionsGeomapLayerLocation.js";

export const PanelOptionsGeomapLayer = defineGrafanaItemClass('PanelOptionsGeomapLayer', GrafanaItem)
    .defineObject('config', PanelOptionsGeomapLayerConfig)
    .defineObject('location', PanelOptionsGeomapLayerLocation)
    .defineValue('name', String)
    .defineValue('tooltip', Boolean)
    .defineValue('type', String)
    .asClass

