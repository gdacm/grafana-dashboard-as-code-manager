import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const FieldConfigCustomText = defineGrafanaItemClass('FieldConfigCustomText', FieldConfigCustom)
    // .defineValue('foo1', String)
    // .defineValue('foo2', Number)
    // .defineObject('foo3', Foo, {
    //     onDefault: (options) => getFoo(options),
    // })
    // .defineArray('foo4s', Bar)
    .asClass
