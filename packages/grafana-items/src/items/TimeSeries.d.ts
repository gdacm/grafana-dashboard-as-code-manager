import { Panel } from "./Panel.js";
import { FieldConfigCustomTimeSerie } from "./FieldConfigCustomTimeSerie.js";
import { PanelOptionsTimeSeries } from "./PanelOptionsTimeSeries.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TimeSeries extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomTimeSerie;
    withCustom(code: (custom: FieldConfigCustomTimeSerie) => void): this
    setNewOptions(onNewCreated: ((item: PanelOptionsTimeSeries) => PanelOptionsTimeSeries) | undefined): this;
    withOptions(onWith: (item: PanelOptionsTimeSeries) => void): this;
    get options(): PanelOptionsTimeSeries;
    setThresholdsStyleArea(): this
}
