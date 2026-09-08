import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { ThresholdsStep } from './ThresholdsStep.js';

export const Thresholds = defineGrafanaItemClass('Thresholds', GrafanaItem)
    .defineValue('mode', String)
    .defineArray('steps', ThresholdsStep)
    .defineMethod('addStepWithValueAndColor', '(value: number, color: string): this;', {
        /**
         * @param {Thresholds} thresholds 
         * @param {number} value 
         * @param {string} color 
         * @returns {Thresholds}
         */
        code: (thresholds, value, color) => {
            const step = new ThresholdsStep(thresholds.metaOptions).setValue(value).setColor(color);
            return thresholds.addStep(step);
        },
    })
    .asClass
