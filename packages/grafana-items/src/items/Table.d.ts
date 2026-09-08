import { Panel } from "./Panel.js";
import { FieldConfigCustomTable } from "./FieldConfigCustomTable.js";
import { PanelOptionsTable } from "./PanelOptionsTable.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Table extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomTable;
    withCustom(code: (custom: FieldConfigCustomTable) => void): this
    setNewOptions(onNewCreated: ((item: PanelOptionsTable) => PanelOptionsTable) | undefined): this;
    withOptions(onWith: (item: PanelOptionsTable) => void): this;
    get options(): PanelOptionsTable;
}
