import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGeomapBasemap } from "./PanelOptionsGeomapBasemap.js";
import { PanelOptionsGeomapControls } from "./PanelOptionsGeomapControls.js";
import { PanelOptionsGeomapLayer } from "./PanelOptionsGeomapLayer.js";
import { PanelOptionsGeomapTooltip } from "./PanelOptionsGeomapTooltip.js";
import { PanelOptionsGeomapView } from "./PanelOptionsGeomapView.js";

export const PanelOptionsGeomap = defineGrafanaItemClass('PanelOptionsGeomap', PanelOptions)
    .defineObject('basemap', PanelOptionsGeomapBasemap, { setNew: true })
    .defineObject('controls', PanelOptionsGeomapControls, { setNew: true })
    .defineArray('layers', PanelOptionsGeomapLayer)
    .defineObject('tooltip', PanelOptionsGeomapTooltip, { setNew: true })
    .defineObject('view', PanelOptionsGeomapView, { setNew: true })
    .asClass
