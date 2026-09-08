import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { ScaleDistribution } from "./ScaleDistribution.js";
import { HideFrom } from "./HideFrom.js";
import { ThresholdStyle } from "./ThresholdStyle.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigCustomBarChart extends FieldConfigCustom {
    setAxisBorderShow(axisBorderShow: Boolean): this;
    setAxisCenteredZero(axisCenteredZero: Boolean): this;
    setAxisColorMode(axisColorMode: String): this;
    setAxisGridShow(axisGridShow: Boolean): this;
    setAxisLabel(axisLabel: String): this;
    setAxisPlacement(axisPlacement: String): this;
    setAxisSoftMax(axisSoftMax: Number): this;
    setAxisSoftMin(axisSoftMin: Number): this;
    setAxisWidth(axisWidth: Number): this;
    setScaleDistribution(scaleDistribution: ScaleDistribution): this;
    withScaleDistribution(onWith: (item: ScaleDistribution) => void): this;
    get scaleDistribution(): ScaleDistribution;
    setFillOpacity(fillOpacity: Number): this;
    setGradientMode(gradientMode: String): this;
    setHideFrom(hideFrom: HideFrom): this;
    withHideFrom(onWith: (item: HideFrom) => void): this;
    get hideFrom(): HideFrom;
    setLineWidth(lineWidth: Number): this;
    setThresholdsStyle(thresholdsStyle: ThresholdStyle): this;
    withThresholdsStyle(onWith: (item: ThresholdStyle) => void): this;
    get thresholdsStyle(): ThresholdStyle;
    setThresholdsStyleMode(mode: string): this;
}
