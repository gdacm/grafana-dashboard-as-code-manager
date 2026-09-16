import { Panel } from "./Panel.js";
import { FieldConfigCustomHistogram } from "./FieldConfigCustomHistogram.js";
import { PanelOptionsHistogram } from "./PanelOptionsHistogram.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Histogram extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomHistogram;
    withCustom(code: (custom: FieldConfigCustomHistogram) => void): this
    setOptions(options: PanelOptionsHistogram): this;
    setNewOptions(onNewCreated: ((item: PanelOptionsHistogram) => PanelOptionsHistogram) | undefined): this;
    withOptions(onWith: (item: PanelOptionsHistogram) => void): this;
    get options(): PanelOptionsHistogram;
}
