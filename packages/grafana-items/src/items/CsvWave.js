import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const CsvWave = defineGrafanaItemClass('CsvWave', GrafanaItem)
    .defineValue('labels', String)
    .defineValue('name', String)
    .defineValue('timeStep', Number)
    .defineValue('valuesCSV', String)
    .asClass
