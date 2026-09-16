import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { FieldConfigCustomTableCellOptions } from "./FieldConfigCustomTableCellOptions.js";
import { FieldConfigCustomTableFooter } from "./FieldConfigCustomTableFooter.js";

export const FieldConfigCustomTable = defineGrafanaItemClass('FieldConfigCustomTable', FieldConfigCustom)
    .defineValue('align', String)
    .defineGrafanaObject('cellOptions', FieldConfigCustomTableCellOptions, {
        onDefault: (options) => new FieldConfigCustomTableCellOptions(options),
    })
    .defineGrafanaObject('footer', FieldConfigCustomTableFooter, {
        onDefault: (options) => new FieldConfigCustomTableFooter(options),
    })
    .defineValue('inspect', Boolean)
    .asClass

