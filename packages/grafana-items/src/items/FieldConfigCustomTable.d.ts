import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { FieldConfigCustomTableCellOptions } from "./FieldConfigCustomTableCellOptions.js";
import { FieldConfigCustomTableFooter } from "./FieldConfigCustomTableFooter.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigCustomTable extends FieldConfigCustom {
    setAlign(align: String): this;
    setCellOptions(cellOptions: FieldConfigCustomTableCellOptions): this;
    withCellOptions(onWith: (item: FieldConfigCustomTableCellOptions) => void): this;
    get cellOptions(): FieldConfigCustomTableCellOptions;
    setFooter(footer: FieldConfigCustomTableFooter): this;
    withFooter(onWith: (item: FieldConfigCustomTableFooter) => void): this;
    get footer(): FieldConfigCustomTableFooter;
    setInspect(inspect: Boolean): this;
}
