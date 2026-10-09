import { TargetDataQuery } from "./TargetDataQuery.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { GrafanaQueryFile } from "./GrafanaQueryFile.js";
import { TimeRegionConfig } from "./TimeRegionConfig.js";

/*
buffer	number	—	GrafanaQuery
channel	string	—	GrafanaQuery
dropPercent	number	—	GrafanaQuery
file	GrafanaQueryFile	—	GrafanaQuery
filter	LiveDataFilter	—	GrafanaQuery
max	number	—	GrafanaQuery
min	number	—	GrafanaQuery
noise	number	—	GrafanaQuery
path	string	—	GrafanaQuery
queryType	GrafanaQueryType	"randomWalk"	GrafanaQuery
search	SearchQuery	—	GrafanaQuery
searchNext	SearchQuery	—	GrafanaQuery
seriesCount	number	—	GrafanaQuery
snapshot	DataFrameJSON[]	—	GrafanaQuery
spread	number	—	GrafanaQuery
startValue	number	—	GrafanaQuery
timeRegion	TimeRegionConfig	—	GrafanaQuery
*/

export const TargetGrafanaQuery = defineGrafanaItemClass('TargetGrafanaQuery', TargetDataQuery)
    .defineValue('buffer', Number)
    .defineValue('channel', String)
    .defineValue('dropPercent', Number)
    .defineObject('file', GrafanaQueryFile)
    // .defineValue('filter', LiveDataFilter)
    .defineValue('max', Number)
    .defineValue('min', Number)
    .defineValue('noise', Number)
    .defineValue('path', String)
    .defineValue('queryType', String) // TODO "annotations" | "list" | "measurements" | "randomWalk" | "snapshot" | "timeRegions"
    .defineValue('search', String)
    .defineValue('searchNext', String)
    .defineValue('seriesCount', Number)
    .defineArray('snapshot', Object) // DataFrameJSON[]
    .defineValue('spread', Number)
    .defineValue('startValue', Number)
    .defineObject('timeRegion', TimeRegionConfig)
    .asClass
