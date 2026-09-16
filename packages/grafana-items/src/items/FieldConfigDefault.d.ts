import { GrafanaItem } from "./GrafanaItem.js";
import { Color } from "./Color.js";
import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { Mapping } from "./Mapping.js";
import { Thresholds } from "./Thresholds.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigDefault extends GrafanaItem {
    setColor(color: Color): this;
    setNewColor(onNewCreated: ((item: Color) => Color) | undefined): this;
    withColor(onWith: (item: Color) => void): this;
    get color(): Color;
    setCustom(custom: FieldConfigCustom): this;
    setNewCustom(onNewCreated: ((item: FieldConfigCustom) => FieldConfigCustom) | undefined): this;
    withCustom(onWith: (item: FieldConfigCustom) => void): this;
    get custom(): FieldConfigCustom;
    get decimals(): Number;
    setDecimals(decimals: Number): this;
    get fieldMinMax(): Boolean;
    setFieldMinMax(fieldMinMax: Boolean): this;
    initMappings(): this;
    get mappings(): Mapping[];
    addMapping(mapping: Mapping): this;
    addNewMapping(onNewCreated: (item: Mapping) => Mapping): this;
    withMappings(onWith: (mappings: Mapping[]) => void): this;
    get max(): Number;
    setMax(max: Number): this;
    get min(): Number;
    setMin(min: Number): this;
    setThresholds(thresholds: Thresholds): this;
    setNewThresholds(onNewCreated: ((item: Thresholds) => Thresholds) | undefined): this;
    withThresholds(onWith: (item: Thresholds) => void): this;
    get thresholds(): Thresholds;
    get unit(): String;
    setUnit(unit: String): this;
    setColorMode(mode: string): this;
}
