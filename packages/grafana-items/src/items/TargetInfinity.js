import { Target } from "./Target.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const TargetInfinity = defineGrafanaItemClass('TargetInfinity', Target)
    .defineObject('columns', Object)
    .defineObject('computed_columns', Object, { name: 'computedColumns' })
    .defineValue('format', String)
    .defineValue('parser', String)
    .defineValue('source', String)
    .defineValue('type', String)
    .defineValue('uql', String)
    .defineValue('url', String)
    .defineValue('url_options', Object, { name: 'urlOptions' })
    .asClass
