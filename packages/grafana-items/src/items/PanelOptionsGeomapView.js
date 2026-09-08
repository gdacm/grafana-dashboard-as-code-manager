import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsGeomapView = defineGrafanaItemClass('PanelOptionsGeomapView', GrafanaItem)
    .defineValue('allLayers', Boolean)
    .defineValue('id', String)
    .defineValue('lat', Number)
    .defineValue('lon', Number)
    .defineValue('noRepeat', Boolean)
    .defineValue('shared', Boolean)
    .defineValue('zoom', Number)
    .asClass
