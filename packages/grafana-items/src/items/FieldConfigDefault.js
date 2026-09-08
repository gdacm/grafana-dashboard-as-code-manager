import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { Color } from "./Color.js";
import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { Mapping } from "./Mapping.js";
import { Thresholds } from "./Thresholds.js";

export const FieldConfigDefault = defineGrafanaItemClass('FieldConfigDefault', GrafanaItem)
    .defineObject('color', Color, {
        setNew: true,
    })
    .defineObject('custom', FieldConfigCustom, {})
    .defineValue('decimals', Number)
    .defineValue('fieldMinMax', Boolean)
    .defineArray('mappings', Mapping)
    .defineValue('max', Number)
    .defineValue('min', Number)
    .defineObject('thresholds', Thresholds, {
        onDefault: (options) => new Thresholds(options).setMode('absolute'),
    })
    .defineValue('unit', String)
    .defineMethod('setColorMode', '(mode: string): this;', {
        /**
         * @param {FieldConfigDefault} fieldConfigDefault
         * @param {String} mode
         * @returns {FieldConfigDefault}
         */
        code: (fieldConfigDefault, mode) => {
            if (fieldConfigDefault.color === undefined) {
                fieldConfigDefault.setNewColor();
            }
            fieldConfigDefault.color.setMode(mode);
            return fieldConfigDefault;
        }
    })
    .asClass
