import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsGeomapTooltip = defineGrafanaItemClass('PanelOptionsGeomapTooltip', GrafanaItem)
    .defineValue('mode', String)
    .asClass
