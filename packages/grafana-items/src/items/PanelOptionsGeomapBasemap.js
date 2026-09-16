import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const PanelOptionsGeomapBasemap = defineGrafanaItemClass('PanelOptionsGeomapBasemap', GrafanaItem)
    .defineBasicObject('config', Object)
    .defineValue('name', String)
    .defineValue('noRepeat', Boolean)
    .defineValue('type', String)
    .asClass
