import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { StyleColor } from "./StyleColor.js";
import { StyleRotation } from "./StyleRotation.js";
import { StyleSize } from "./StyleSize.js";
import { StyleSymbol } from "./StyleSymbol.js";
import { StyleSymbolAlign } from "./StyleSymbolAlign.js";
import { StyleTextConfig } from "./StyleTextConfig.js";

export const PanelOptionsGeomapLayerConfigStyle = defineGrafanaItemClass('PanelOptionsGeomapLayerConfigStyle', GrafanaItem)
    .defineGrafanaObject('color', StyleColor, { onDefault: (options) => new StyleColor(options) })
    .defineValue('opacity', Number, { onDefault: (options) => 1 })
    .defineGrafanaObject('rotation', StyleRotation, { onDefault: (options) => new StyleRotation(options) })
    .defineGrafanaObject('size', StyleSize, { onDefault: (options) => new StyleSize(options) })
    .defineGrafanaObject('symbol', StyleSymbol, { onDefault: (options) => new StyleSymbol(options) })
    .defineGrafanaObject('symbolAlign', StyleSymbolAlign, { onDefault: (options) => new StyleSymbolAlign(options) })
    .defineGrafanaObject('textConfig', StyleTextConfig, { onDefault: (options) => new StyleTextConfig(options) })
    .asClass
