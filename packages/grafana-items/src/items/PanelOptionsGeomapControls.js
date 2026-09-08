import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsGeomapControls = defineGrafanaItemClass('PanelOptionsGeomapControls', GrafanaItem)
    .defineValue('mouseWheelZoom', Boolean)
    .defineValue('showAttribution', Boolean)
    .defineValue('showDebug', Boolean)
    .defineValue('showMeasure', Boolean)
    .defineValue('showScale', Boolean)
    .defineValue('showZoom', Boolean)
    .asClass
