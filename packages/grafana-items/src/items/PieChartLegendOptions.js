import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { VizLegendOptions } from "./VizLegendOptions.js";

export const PieChartLegendOptions = defineGrafanaItemClass('PieChartLegendOptions', VizLegendOptions)
    .defineBasicArray('values', String)
    // .defineValue('foo1', String)
    // .defineValue('foo2', Number)
    // .defineGrafanaObject('foo3', Foo, {
    //     onDefault: (metaOptions) => getFoo(metaOptions),
    // })
    // .defineArray('foo4s', Bar)
    .asClass
