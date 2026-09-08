import { Panel } from "./Panel.js";
import { FieldConfigCustomText } from "./FieldConfigCustomText.js";
import { PanelOptionsText } from "./PanelOptionsText.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TextPanel extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomText;
    withCustom(code: (custom: FieldConfigCustomText) => void): this
    setNewOptions(onNewCreated: ((item: PanelOptionsText) => PanelOptionsText) | undefined): this;
    withOptions(onWith: (item: PanelOptionsText) => void): this;
    get options(): PanelOptionsText;
}
