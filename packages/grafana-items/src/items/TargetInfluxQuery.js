import { TargetDataQuery } from "./TargetDataQuery.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { InfluxQueryPart } from "./InfluxQueryPart.js";
import { InfluxQueryTag } from "./InfluxQueryTag.js";

export const TargetInfluxQuery = defineGrafanaItemClass('TargetInfluxQuery', TargetDataQuery)
    // .defineArray('adhocFilters', AdHocVariableFilter)
    .defineValue('alias', String)
    .defineValue('fill', String)
    .defineObject('groupBy', InfluxQueryPart)
    .defineValue('measurement', String)
    .defineValue('orderByTime', String)
    .defineValue('policy', String)
    .defineValue('query', String)
    .defineValue('queryType', String) // TODO  "Classic" | "InfluxQL" | "Flux"
    .defineValue('rawQuery', Boolean)
    .defineValue('resultFormat', String) // TODO "time_series" | "table"
    // .defineArrayArray('select', InfluxQueryPart) ?
    .defineValue('slimit', String)
    .defineArray('tags', InfluxQueryTag)
    .defineValue('textEditor', Boolean)
    .defineValue('tz', String)
    // .defineValue('seriesCount', Number)
    // .defineValue('scenarioId', String)
    // .defineValue('stringInput', String)
    .asClass
