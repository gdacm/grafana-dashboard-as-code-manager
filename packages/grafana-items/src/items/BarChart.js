import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { FieldConfigCustomBarChart } from "./FieldConfigCustomBarChart.js";
import { PanelOptionsBarChart } from "./PanelOptionsBarChart.js";
import { definePanel } from "./properties/panel.js";

export const BarChart = defineGrafanaItemClass('BarChart', Panel)
    .with((instance) => definePanel(instance, 'barchart', FieldConfigCustomBarChart, PanelOptionsBarChart, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic')
        }
    }))
    .defineMethod('setThresholdsStyleArea', '(): this', {
        code: (instance) => {
            instance.custom.thresholdsStyle.setMode('area');
            return instance;
        }
    })
    .asClass

    