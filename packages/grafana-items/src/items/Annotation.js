import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { Datasource } from "./Datasource.js";

export const Annotation = defineGrafanaItemClass('Annotation', GrafanaItem)
    .defineValue('builtIn', Number)
    .defineObject('datasource', Datasource, { setNew: true })
    .defineValue('enable', Boolean)
    .defineValue('hide', Boolean)
    .defineValue('iconColor', String)
    .defineValue('name', String)
    .defineValue('type', String)
    .asClass

