import { Panel } from "./Panel.js";
import { FieldConfigCustomStat } from "./FieldConfigCustomStat.js";
import { PanelOptionsStat } from "./PanelOptionsStat.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Stat extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomStat;
    withCustom(code: (custom: FieldConfigCustomStat) => void): this
    setNewOptions(onNewCreated: ((item: PanelOptionsStat) => PanelOptionsStat) | undefined): this;
    withOptions(onWith: (item: PanelOptionsStat) => void): this;
    get options(): PanelOptionsStat;
}
