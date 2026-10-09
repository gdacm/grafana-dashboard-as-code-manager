import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const InfluxQueryPart = defineGrafanaItemClass('InfluxQueryPart', GrafanaItem)
    .defineArray('params', String)
    .defineValue('type', String)
    .asClass
