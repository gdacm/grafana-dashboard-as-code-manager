import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const LineStyle = defineGrafanaItemClass('LineStyle', GrafanaItem)
    .defineValue('fill', String)
    .asClass
