import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { FieldConfigCustomTableCellOptions } from "./FieldConfigCustomTableCellOptions.js";
import { FieldConfigCustomTableFooter } from "./FieldConfigCustomTableFooter.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigCustomTable extends FieldConfigCustom {
    setAlign(align: String): this;
    setCellOptions(cellOptions: FieldConfigCustomTableCellOptions): this;
    setNewCellOptions(onNewCreated: ((item: FieldConfigCustomTableCellOptions) => FieldConfigCustomTableCellOptions) | undefined): this;
    withCellOptions(onWith: (item: FieldConfigCustomTableCellOptions) => void): this;
    get cellOptions(): FieldConfigCustomTableCellOptions;
    setFooter(footer: FieldConfigCustomTableFooter): this;
    setNewFooter(onNewCreated: ((item: FieldConfigCustomTableFooter) => FieldConfigCustomTableFooter) | undefined): this;
    withFooter(onWith: (item: FieldConfigCustomTableFooter) => void): this;
    get footer(): FieldConfigCustomTableFooter;
    setInspect(inspect: Boolean): this;
}
