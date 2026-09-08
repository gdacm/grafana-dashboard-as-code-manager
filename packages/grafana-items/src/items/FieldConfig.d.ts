import { GrafanaItem } from "./GrafanaItem.js";
import { FieldConfigDefault } from "./FieldConfigDefault.js";
import { FieldConfigOverride } from "./FieldConfigOverride.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfig extends GrafanaItem {
    setDefaults(defaults: FieldConfigDefault): this;
    withDefaults(onWith: (item: FieldConfigDefault) => void): this;
    get defaults(): FieldConfigDefault;
    initOverrides(): this;
    get overrides(): FieldConfigOverride[];
    addOverride(override: FieldConfigOverride): this;
    addNewOverride(onNewCreated: (item: FieldConfigOverride) => FieldConfigOverride): this;
    withOverrides(onWith: (overrides: FieldConfigOverride[]) => void): this;
    addNewOverrideHideSeriesFrom(names: string[]): this
}
