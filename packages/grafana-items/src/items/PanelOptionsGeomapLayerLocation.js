import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const PanelOptionsGeomapLayerLocation = defineGrafanaItemClass('PanelOptionsGeomapLayerLocation', GrafanaItem)
    .defineValue('mode', String)
    .asClass
