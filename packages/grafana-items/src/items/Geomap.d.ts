import { Panel } from "./Panel.js";
import { FieldConfigCustomGeomap } from "./FieldConfigCustomGeomap.js";
import { PanelOptionsGeomap } from "./PanelOptionsGeomap.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Geomap extends Panel {
    constructor(metaOptions: GenericMetaOptions)
    get custom(): FieldConfigCustomGeomap;
    withCustom(code: (custom: FieldConfigCustomGeomap) => void): this
    setNewOptions(onNewCreated: ((item: PanelOptionsGeomap) => PanelOptionsGeomap) | undefined): this;
    withOptions(onWith: (item: PanelOptionsGeomap) => void): this;
    get options(): PanelOptionsGeomap;
}
