import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const VizTooltipOptions = defineGrafanaItemClass('VizTooltipOptions', GrafanaItem)
    .defineValue('hideZeros', Boolean)
    .defineValue('maxHeight', Number)
    .defineValue('maxWidth', Number)
    .defineValue('mode', String)
    .defineValue('sort', String)
    .asClass
