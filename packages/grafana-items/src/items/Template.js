import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { TemplateCurrent } from "./TemplateCurrent.js";
import { TemplateOption } from "./TemplateOption.js";

export const Template = defineGrafanaItemClass('Template', GrafanaItem)
    .defineObject('current', TemplateCurrent)
    .defineValue('definition', String)
    .defineValue('description', String)
    .defineValue('hide', Number)
    .defineValue('label', String)
    .defineValue('multi', Boolean)
    .defineValue('name', String)
    .defineArray('options', TemplateOption)
    .defineValue('query', Object)
    .defineValue('refresh', Number)
    .defineValue('regex', String)
    .defineValue('sort', Number)
    .defineValue('type', String)
    .defineValue('useTags', Boolean)
    .asClass
