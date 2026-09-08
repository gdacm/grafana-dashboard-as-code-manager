import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { StyleColor } from "./StyleColor.js";
import { StyleRotation } from "./StyleRotation.js";
import { StyleSize } from "./StyleSize.js";
import { StyleSymbol } from "./StyleSymbol.js";
import { StyleSymbolAlign } from "./StyleSymbolAlign.js";
import { StyleTextConfig } from "./StyleTextConfig.js";

export const PanelOptionsGeomapLayerConfigStyle = defineGrafanaItemClass('PanelOptionsGeomapLayerConfigStyle', GrafanaItem)
    .defineObject('color', StyleColor, { onDefault: (options) => new StyleColor(options) })
    .defineValue('opacity', Number, { onDefault: (options) => 1 })
    .defineObject('rotation', StyleRotation, { onDefault: (options) => new StyleRotation(options) })
    .defineObject('size', StyleSize, { onDefault: (options) => new StyleSize(options) })
    .defineObject('symbol', StyleSymbol, { onDefault: (options) => new StyleSymbol(options) })
    .defineObject('symbolAlign', StyleSymbolAlign, { onDefault: (options) => new StyleSymbolAlign(options) })
    .defineObject('textConfig', StyleTextConfig, { onDefault: (options) => new StyleTextConfig(options) })
    .asClass
