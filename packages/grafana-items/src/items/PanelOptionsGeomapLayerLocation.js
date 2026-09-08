import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsGeomapLayerLocation = defineGrafanaItemClass('PanelOptionsGeomapLayerLocation', GrafanaItem)
    .defineValue('mode', String)
    .asClass
