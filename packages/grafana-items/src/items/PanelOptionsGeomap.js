import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { PanelOptionsGeomapBasemap } from "./PanelOptionsGeomapBasemap.js";
import { PanelOptionsGeomapControls } from "./PanelOptionsGeomapControls.js";
import { PanelOptionsGeomapLayer } from "./PanelOptionsGeomapLayer.js";
import { PanelOptionsGeomapTooltip } from "./PanelOptionsGeomapTooltip.js";
import { PanelOptionsGeomapView } from "./PanelOptionsGeomapView.js";

export const PanelOptionsGeomap = defineGrafanaItemClass('PanelOptionsGeomap', PanelOptions)
    .defineObject('basemap', PanelOptionsGeomapBasemap)
    .defineObject('controls', PanelOptionsGeomapControls)
    .defineArray('layers', PanelOptionsGeomapLayer)
    .defineObject('tooltip', PanelOptionsGeomapTooltip)
    .defineObject('view', PanelOptionsGeomapView)
    .asClass
