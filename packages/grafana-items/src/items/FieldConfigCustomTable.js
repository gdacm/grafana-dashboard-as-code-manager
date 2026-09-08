import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { FieldConfigCustomTableCellOptions } from "./FieldConfigCustomTableCellOptions.js";
import { FieldConfigCustomTableFooter } from "./FieldConfigCustomTableFooter.js";

export const FieldConfigCustomTable = defineGrafanaItemClass('FieldConfigCustomTable', FieldConfigCustom)
    .defineValue('align', String)
    .defineObject('cellOptions', FieldConfigCustomTableCellOptions, {
        onDefault: (options) => new FieldConfigCustomTableCellOptions(options),
    })
    .defineObject('footer', FieldConfigCustomTableFooter, {
        onDefault: (options) => new FieldConfigCustomTableFooter(options),
    })
    .defineValue('inspect', Boolean)
    .asClass

