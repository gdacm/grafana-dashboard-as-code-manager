import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const PanelOptionsGaugeReduceOptions = defineGrafanaItemClass('PanelOptionsGaugeReduceOptions', GrafanaItem)
    .defineBasicArray('calcs', String, { setEmpty: true })
    .defineValue('fields', String)
    .defineValue('limit', Number)
    .defineValue('values', Boolean)
    .asClass
