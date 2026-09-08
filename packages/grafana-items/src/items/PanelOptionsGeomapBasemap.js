import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsGeomapBasemap = defineGrafanaItemClass('PanelOptionsGeomapBasemap', GrafanaItem)
    .defineObject('config', Object, { setNew: true })
    .defineValue('name', String)
    .defineValue('noRepeat', Boolean)
    .defineValue('type', String)
    .asClass
