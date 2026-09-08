import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { defineAxisConfig } from "./properties/axisConfig.js";
import { defineHideableFieldConfig } from "./properties/hideableFieldConfig.js";
import { ThresholdStyle } from "./ThresholdStyle.js";

export const FieldConfigCustomBarChart = defineGrafanaItemClass('FieldConfigCustomBarChart', FieldConfigCustom)
    .with(builder => defineAxisConfig(builder))
    .defineValue('fillOpacity', Number)
    .defineValue('gradientMode', String)
    .with(builder => defineHideableFieldConfig(builder))
    .defineValue('lineWidth', Number)
    .defineObject('thresholdsStyle', ThresholdStyle, {
        onDefault: (options) => new ThresholdStyle(options).setMode('off'),
    })
    .defineMethod('setThresholdsStyleMode', '(mode: string): this;',{
        /**
         * @param {FieldConfigCustomBarChart} fieldConfigCustomBarChart
         * @param {String} mode
         * @returns {FieldConfigCustomBarChart}
         */
        code: (fieldConfigCustomBarChart, mode) => {
            fieldConfigCustomBarChart.thresholdsStyle.setMode(mode);
            return fieldConfigCustomBarChart;
        }
    })
    .asClass
