import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const StyleSize = defineGrafanaItemClass('StyleSize', GrafanaItem)
    .defineValue('fixed', Number)
    .defineValue('max', Number)
    .defineValue('min', Number)
    .asClass

