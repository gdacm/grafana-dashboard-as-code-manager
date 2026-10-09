import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class CsvWave extends GrafanaItem {
    get labels(): String;
    setLabels(labels: String): this;
    get name(): String;
    setName(name: String): this;
    get timeStep(): Number;
    setTimeStep(timeStep: Number): this;
    get valuesCSV(): String;
    setValuesCSV(valuesCSV: String): this;
}
