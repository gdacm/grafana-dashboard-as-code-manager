import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsGaugeReduceOptions = defineGrafanaItemClass('PanelOptionsGaugeReduceOptions', GrafanaItem)
    .defineArray('calcs', String, { setEmpty: true })
    .defineValue('fields', String)
    .defineValue('limit', Number)
    .defineValue('values', Boolean)
    .asClass
