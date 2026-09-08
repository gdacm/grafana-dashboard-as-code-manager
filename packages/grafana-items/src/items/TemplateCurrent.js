import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const TemplateCurrent = defineGrafanaItemClass('TemplateCurrent', GrafanaItem)
    .defineValue('text', Object)
    .defineValue('value', Object)
    .asClass
