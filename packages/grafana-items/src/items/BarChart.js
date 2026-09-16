import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { FieldConfigCustomBarChart } from "./FieldConfigCustomBarChart.js";
import { PanelOptionsBarChart } from "./PanelOptionsBarChart.js";
import { definePanel } from "./properties/panel.js";

export const BarChart = defineGrafanaItemClass('BarChart', Panel)
    .with((instance) => definePanel(instance, 'barchart', FieldConfigCustomBarChart, PanelOptionsBarChart, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic')
            instance.fieldConfig.defaults.thresholds.setMode('absolute');
        }
    }))
    .defineMethod('setThresholdsStyleMode', '(mode: string): this', {
        /**
         * @param {BarChart} instance 
         * @returns 
         */
        code: (instance, mode) => {
            instance.custom.thresholdsStyle.setMode(mode);
            return instance;
        }
    })
    .asClass

    