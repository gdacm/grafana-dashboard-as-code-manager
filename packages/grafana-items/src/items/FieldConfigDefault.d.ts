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
    withCustom(onWith: (item: FieldConfigCustom) => void): this;
    get custom(): FieldConfigCustom;
    setDecimals(decimals: Number): this;
    setFieldMinMax(fieldMinMax: Boolean): this;
    initMappings(): this;
    get mappings(): Mapping[];
    addMapping(mapping: Mapping): this;
    addNewMapping(onNewCreated: (item: Mapping) => Mapping): this;
    withMappings(onWith: (mappings: Mapping[]) => void): this;
    setMax(max: Number): this;
    setMin(min: Number): this;
    setThresholds(thresholds: Thresholds): this;
    withThresholds(onWith: (item: Thresholds) => void): this;
    get thresholds(): Thresholds;
    setUnit(unit: String): this;
    setColorMode(mode: string): this;
}
