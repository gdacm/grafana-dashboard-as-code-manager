import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const TemplateOption = defineGrafanaItemClass('TemplateOption', GrafanaItem)
    .defineValue('selected', Boolean)
    .defineValue('text', String)
    .defineValue('value', String)
    .asClass
