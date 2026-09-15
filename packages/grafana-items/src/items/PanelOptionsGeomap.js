import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGeomapBasemap } from "./PanelOptionsGeomapBasemap.js";
import { PanelOptionsGeomapControls } from "./PanelOptionsGeomapControls.js";
import { PanelOptionsGeomapLayer } from "./PanelOptionsGeomapLayer.js";
import { PanelOptionsGeomapTooltip } from "./PanelOptionsGeomapTooltip.js";
import { PanelOptionsGeomapView } from "./PanelOptionsGeomapView.js";

export const PanelOptionsGeomap = defineGrafanaItemClass('PanelOptionsGeomap', PanelOptions)
    .defineGrafanaObject('basemap', PanelOptionsGeomapBasemap, { setNew: true })
    .defineGrafanaObject('controls', PanelOptionsGeomapControls, { setNew: true })
    .defineArray('layers', PanelOptionsGeomapLayer)
    .defineGrafanaObject('tooltip', PanelOptionsGeomapTooltip, { setNew: true })
    .defineGrafanaObject('view', PanelOptionsGeomapView, { setNew: true })
    .asClass
