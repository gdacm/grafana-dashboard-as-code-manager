import { Target } from "./Target.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { CsvWave } from "./CsvWave.js";
import { PulseWaveQuery } from "./PulseWaveQuery.js";
import { SimulationQuery } from "./SimulationQuery.js";
import { StreamingQuery } from "./StreamingQuery.js";
import { UsaQuery } from "./UsaQuery.js";
import { NodesQuery } from "./NodesQuery.js";

export const TargetTestDataQuery = defineGrafanaItemClass('TargetTestDataQuery', Target)
    .defineValue('alias', String)
    .defineValue('channel', String)
    .defineValue('csvContent', String)
    .defineValue('csvFileName', String)
    .defineArray('csvWave', CsvWave)
    .defineValue('dropPercent', Number)
    .defineValue('errorSource', String)
    .defineValue('errorType', String)
    .defineValue('flamegraphDiff', Boolean)
    .defineValue('labels', String)
    .defineValue('levelColumn', Boolean)
    .defineValue('lines', Number)
    .defineValue('max', Number)
    .defineValue('min', Number)
    .defineValue('noise', Number)
    .defineObject('nodes', NodesQuery)
    .defineObject('pulseWave', PulseWaveQuery)
    // .defineArrayArray('points', unknown)
    .defineValue('rawFrameContent', String)
    .defineValue('scenarioId', String) // TODO "annotations" | "arrow" | "csv_content" | "csv_file" | "csv_metric_values" | "datapoints_outside_range" | "exponential_heatmap_bucket_data" | "flame_graph" | "grafana_api" | "linear_heatmap_bucket_data" | "live" | "logs" | "manual_entry" | "no_data_points" | "node_graph" | "predictable_csv_wave" | "predictable_pulse" | "random_walk" | "random_walk_table" | "random_walk_with_error" | "raw_frame" | "server_error_500" | "simulation" | "slow_query" | "streaming_client" | "table_static" | "trace" | "usa" | "variables-query"
    .defineValue('seriesCount', Number)
    .defineObject('sim', SimulationQuery)
    .defineValue('spanCount', Number)
    .defineValue('spread', Number)
    .defineValue('startValue', Number)
    .defineObject('stream', StreamingQuery)
    .defineValue('stringInput', String)
    .defineObject('usa', UsaQuery)
    .defineValue('withNil', Boolean)
    .asClass
