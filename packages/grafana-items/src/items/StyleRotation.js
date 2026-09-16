import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const StyleRotation = defineGrafanaItemClass('StyleRotation', GrafanaItem)
    .defineValue('fixed', Number)
    .defineValue('max', Number)
    .defineValue('min', Number)
    .defineValue('mode', String)
    .asClass
