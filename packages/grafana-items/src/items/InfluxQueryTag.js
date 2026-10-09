import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const InfluxQueryTag = defineGrafanaItemClass('InfluxQueryTag', GrafanaItem)
    .defineValue('key', String)
    .defineValue('operator', String)
    .defineValue('value', String)
    .asClass
