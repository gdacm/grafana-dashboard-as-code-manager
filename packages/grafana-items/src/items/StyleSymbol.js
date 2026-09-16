import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const StyleSymbol = defineGrafanaItemClass('StyleSymbol', GrafanaItem)
    .defineValue('field', String)
    .defineValue('fixed', String)
    .defineValue('mode', String)
    .asClass
