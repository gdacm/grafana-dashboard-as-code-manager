import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { definePanel } from "./properties/panel.js";
import { FieldConfigCustomPieChart } from "./FieldConfigCustomPieChart.js";
import { PanelOptionsPieChart } from "./PanelOptionsPieChart.js";

export const PieChart = defineGrafanaItemClass('PieChart', Panel)
    .with((instance) => definePanel(instance, 'piechart', FieldConfigCustomPieChart, PanelOptionsPieChart, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic')
        }
    }))
    .asClass
