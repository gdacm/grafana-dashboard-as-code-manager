import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const Link = defineGrafanaItemClass('Link', GrafanaItem)
    .defineConstructor(instance => instance.setType('link'))
    .defineValue('asDropdown', Boolean)
    .defineValue('icon', String)
    .defineValue('includeVars', Boolean)
    .defineValue('keepTime', Boolean)
    .defineArray('tags', String, { setEmpty: true })
    .defineValue('targetBlank', Boolean)
    .defineValue('title', String)
    .defineValue('tooltip', String)
    .defineValue('type', String)
    .defineValue('url', String)
    .asClass
