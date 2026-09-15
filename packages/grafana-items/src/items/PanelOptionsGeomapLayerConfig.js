import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGeomapLayerConfigStyle } from "./PanelOptionsGeomapLayerConfigStyle.js";

export const PanelOptionsGeomapLayerConfig = defineGrafanaItemClass('PanelOptionsGeomapLayerConfig', GrafanaItem)
    .defineValue('showLegend', Boolean)
    .defineGrafanaObject('style', PanelOptionsGeomapLayerConfigStyle, {
        onDefault: (options) => new PanelOptionsGeomapLayerConfigStyle(options),
        setNew: true,
    })
    .asClass
