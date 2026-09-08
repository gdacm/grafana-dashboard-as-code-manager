import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGeomapLayerConfig } from "./PanelOptionsGeomapLayerConfig.js";
import { PanelOptionsGeomapLayerLocation } from "./PanelOptionsGeomapLayerLocation.js";

export const PanelOptionsGeomapLayer = defineGrafanaItemClass('PanelOptionsGeomapLayer', GrafanaItem)
    .defineObject('config', PanelOptionsGeomapLayerConfig, { setNew: true })
    .defineObject('location', PanelOptionsGeomapLayerLocation, { setNew: true })
    .defineValue('name', String)
    .defineValue('tooltip', Boolean)
    .defineValue('type', String)
    .asClass

