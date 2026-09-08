import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { Datasource } from "./Datasource.js";

export const Target = defineGrafanaItemClass('Target', GrafanaItem)
    .defineValue('alias', String)
    .defineValue('refId', String)
    .defineValue('query', String)
    .defineObject('datasource', Datasource, { setNew: true })
    .defineValue('seriesCount', Number)
    .defineValue('scenarioId', String)
    .defineValue('stringInput', String)
    .asClass
