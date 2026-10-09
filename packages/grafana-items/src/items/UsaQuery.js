import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const UsaQuery = defineGrafanaItemClass('UsaQuery', GrafanaItem)
    .defineArray('fields', String)
    .defineValue('mode', String)
    .defineValue('period', String)
    .defineArray('states', String)
    .asClass
