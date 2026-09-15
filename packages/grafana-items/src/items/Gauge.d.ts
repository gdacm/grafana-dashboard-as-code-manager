import { Panel } from "./Panel.js";
import { FieldConfigCustomGauge } from "./FieldConfigCustomGauge.js";
import { PanelOptionsGauge } from "./PanelOptionsGauge.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Gauge extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomGauge;
    withCustom(code: (custom: FieldConfigCustomGauge) => void): this
    withOptions(onWith: (item: PanelOptionsGauge) => void): this;
    get options(): PanelOptionsGauge;
}
