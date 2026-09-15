import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { definePanel } from "./properties/panel.js";
import { FieldConfigCustomPieChart } from "./FieldConfigCustomPieChart.js";
import { PanelOptionsPieChart } from "./PanelOptionsPieChart.js";

export const PieChart = defineGrafanaItemClass('PieChart', Panel)
    .with((instance) => definePanel(instance, 'piechart', FieldConfigCustomPieChart, PanelOptionsPieChart, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic')
        }
    }))


    // .defineValue('foo1', String)
    // .defineValue('foo2', Number)
    // .defineGrafanaObject('foo3', Foo, {
    //     onDefault: (metaOptions) => getFoo(metaOptions),
    // })
    // .defineArray('foo4s', Bar)
    .asClass
