import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGeomapLayerConfig } from "./PanelOptionsGeomapLayerConfig.js";
import { PanelOptionsGeomapLayerLocation } from "./PanelOptionsGeomapLayerLocation.js";

export const PanelOptionsGeomapLayer = defineGrafanaItemClass('PanelOptionsGeomapLayer', GrafanaItem)
    .defineGrafanaObject('config', PanelOptionsGeomapLayerConfig, { setNew: true })
    .defineGrafanaObject('location', PanelOptionsGeomapLayerLocation, { setNew: true })
    .defineValue('name', String)
    .defineValue('tooltip', Boolean)
    .defineValue('type', String)
    .asClass

