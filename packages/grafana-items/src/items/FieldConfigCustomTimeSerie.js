import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { defineAxisConfig } from "./properties/axisConfig.js";
import { defineHideableFieldConfig } from "./properties/hideableFieldConfig.js";
import { LineStyle } from "./LineStyle.js";
import { ThresholdStyle } from "./ThresholdStyle.js";
import { Stacking } from "./Stacking.js";

export const FieldConfigCustomTimeSerie = defineGrafanaItemClass('FieldConfigCustomTimeSerie', FieldConfigCustom)
    .with(builder => defineAxisConfig(builder))
    .defineValue('barAlignment', Number)
    .defineValue('barMaxWidth', Number)
    .defineValue('barWidthFactor', Number)
    .defineValue('drawStyle', String)
    .defineValue('fillBelowTo', String)
    .defineValue('fillColor', String)
    .defineValue('fillOpacity', Number)
    .defineValue('gradientMode', String)
    .with(builder => defineHideableFieldConfig(builder))
    .defineValue('insertNulls', Boolean)
    .defineValue('lineInterpolation', String)
    .defineObject('lineStyle', LineStyle, {
        onDefault: (options) => new LineStyle(options).setFill('solid'),
    })
    .defineMethod('setLineStyleFill', '(fill: string): this;', {
        /**
         * @param {FieldConfigCustomTimeSerie} fieldConfigCustomTimeSerie
         * @param {String} fill
         * @returns {FieldConfigCustomTimeSerie}
         */
        code: (fieldConfigCustomTimeSerie, fill) => {
            fieldConfigCustomTimeSerie.lineStyle.setFill(fill);
            return fieldConfigCustomTimeSerie;
        }
    })
    .defineValue('lineWidth', Number)
    .defineValue('pointColor', String)
    .defineValue('pointSize', Number)
    .defineValue('pointSymbol', String)
    .defineValue('showPoints', String)
    .defineValue('showValues', Boolean)
    .defineValue('spanNulls', Boolean)
    .defineObject('stacking', Stacking, {
        onDefault: (options) => new Stacking(options).setGroup('A').setMode('none'),
    })
    .defineObject('thresholdsStyle', ThresholdStyle, {
        onDefault: (options) => new ThresholdStyle(options).setMode('off'),
    })
    // .define(FieldConfigCustomTimeSerie, 'transform', )
    .defineMethod('setThresholdsStyleMode', '(mode: string): this;', {
        /**
         * @param {FieldConfigCustomTimeSerie} fieldConfigCustomTimeSerie
         * @param {String} mode
         * @returns {FieldConfigCustomTimeSerie}
         */
        code: (fieldConfigCustomTimeSerie, mode) => {
            fieldConfigCustomTimeSerie.thresholdsStyle.setMode(mode);
            return fieldConfigCustomTimeSerie;
        }
    })
    .asClass
