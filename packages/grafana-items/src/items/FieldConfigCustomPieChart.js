import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const FieldConfigCustomPieChart = defineGrafanaItemClass('FieldConfigCustomPieChart', FieldConfigCustom)
    // .defineValue('foo1', String)
    // .defineValue('foo2', Number)
    // .defineGrafanaObject('foo3', Foo, {
    //     onDefault: (metaOptions) => getFoo(metaOptions),
    // })
    // .defineArray('foo4s', Bar)
    .asClass
