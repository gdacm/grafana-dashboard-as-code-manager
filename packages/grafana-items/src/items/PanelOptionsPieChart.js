import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsPieChart = defineGrafanaItemClass('PanelOptionsPieChart', PanelOptions)
    // .defineValue('foo1', String)
    // .defineValue('foo2', Number)
    // .defineGrafanaObject('foo3', Foo, {
    //     onDefault: (metaOptions) => getFoo(metaOptions),
    // })
    // .defineArray('foo4s', Bar)
    .asClass
