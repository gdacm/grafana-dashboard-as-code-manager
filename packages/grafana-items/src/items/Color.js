import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const Color = defineGrafanaItemClass('Color', GrafanaItem)
    .defineValue('mode', String)
    .asClass
