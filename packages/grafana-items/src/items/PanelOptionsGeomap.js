import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { PanelOptionsGeomapBasemap } from "./PanelOptionsGeomapBasemap.js";
import { PanelOptionsGeomapControls } from "./PanelOptionsGeomapControls.js";
import { PanelOptionsGeomapLayer } from "./PanelOptionsGeomapLayer.js";
import { PanelOptionsGeomapTooltip } from "./PanelOptionsGeomapTooltip.js";
import { PanelOptionsGeomapView } from "./PanelOptionsGeomapView.js";

export const PanelOptionsGeomap = defineGrafanaItemClass('PanelOptionsGeomap', PanelOptions)
    .defineGrafanaObject('basemap', PanelOptionsGeomapBasemap)
    .defineGrafanaObject('controls', PanelOptionsGeomapControls)
    .defineArray('layers', PanelOptionsGeomapLayer)
    .defineGrafanaObject('tooltip', PanelOptionsGeomapTooltip)
    .defineGrafanaObject('view', PanelOptionsGeomapView)
    .asClass
