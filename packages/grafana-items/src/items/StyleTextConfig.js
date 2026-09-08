import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const StyleTextConfig = defineGrafanaItemClass('StyleTextConfig', GrafanaItem)
    .defineValue('fontSize', Number)
    .defineValue('offsetX', Number)
    .defineValue('offsetY', Number)
    .defineValue('textAlign', String)
    .defineValue('textBaseline', String)
    .asClass