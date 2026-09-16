import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { PanelOptionsTimeSeries } from "./PanelOptionsTimeSeries.js";
import { FieldConfigCustomTimeSerie } from "./FieldConfigCustomTimeSerie.js";
import { definePanel } from "./properties/panel.js";

export const TimeSeries = defineGrafanaItemClass('TimeSeries', Panel)
    .with(builder => definePanel(builder, 'timeseries', FieldConfigCustomTimeSerie, PanelOptionsTimeSeries, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic')
            instance.fieldConfig.defaults.thresholds.setMode('absolute');
        },
    }))
    .defineMethod('setThresholdsStyleMode', '(mode: string): this', {
        /**
         * @param {TimeSeries} instance 
         * @returns 
         */
        code: (instance, mode) => {
            instance.custom.thresholdsStyle.setMode(mode);
            return instance;
        }
    })
    .asClass
