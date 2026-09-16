import { GrafanaItem } from "./GrafanaItem.js";
import { ScaleDistribution } from "./ScaleDistribution.js";
import { HideFrom } from "./HideFrom.js";
import { StackableFieldConfig } from "./StackableFieldConfig.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigCustomHistogram extends GrafanaItem {
    get axisBorderShow(): Boolean;
    setAxisBorderShow(axisBorderShow: Boolean): this;
    get axisCenteredZero(): Boolean;
    setAxisCenteredZero(axisCenteredZero: Boolean): this;
    get axisColorMode(): String;
    setAxisColorMode(axisColorMode: String): this;
    get axisGridShow(): Boolean;
    setAxisGridShow(axisGridShow: Boolean): this;
    get axisLabel(): String;
    setAxisLabel(axisLabel: String): this;
    get axisPlacement(): String;
    setAxisPlacement(axisPlacement: String): this;
    get axisSoftMax(): Number;
    setAxisSoftMax(axisSoftMax: Number): this;
    get axisSoftMin(): Number;
    setAxisSoftMin(axisSoftMin: Number): this;
    get axisWidth(): Number;
    setAxisWidth(axisWidth: Number): this;
    setScaleDistribution(scaleDistribution: ScaleDistribution): this;
    setNewScaleDistribution(onNewCreated: ((item: ScaleDistribution) => ScaleDistribution) | undefined): this;
    withScaleDistribution(onWith: (item: ScaleDistribution) => void): this;
    get scaleDistribution(): ScaleDistribution;
    setHideFrom(hideFrom: HideFrom): this;
    setNewHideFrom(onNewCreated: ((item: HideFrom) => HideFrom) | undefined): this;
    withHideFrom(onWith: (item: HideFrom) => void): this;
    get hideFrom(): HideFrom;
    get fillOpacity(): Number;
    setFillOpacity(fillOpacity: Number): this;
    get gradientMode(): String;
    setGradientMode(gradientMode: String): this;
    get lineWidth(): Number;
    setLineWidth(lineWidth: Number): this;
    setStacking(stacking: StackableFieldConfig): this;
    setNewStacking(onNewCreated: ((item: StackableFieldConfig) => StackableFieldConfig) | undefined): this;
    withStacking(onWith: (item: StackableFieldConfig) => void): this;
    get stacking(): StackableFieldConfig;
}
