import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const PanelOptionsGeomapTooltip = defineGrafanaItemClass('PanelOptionsGeomapTooltip', GrafanaItem)
    .defineValue('mode', String)
    .asClass
