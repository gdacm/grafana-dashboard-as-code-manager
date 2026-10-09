import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const GrafanaQueryFile = defineGrafanaItemClass('GrafanaQueryFile', GrafanaItem)
    .defineValue('name', String)
    .defineValue('size', Number)
    .asClass
