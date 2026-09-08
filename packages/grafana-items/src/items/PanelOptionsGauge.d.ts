import { PanelOptions } from "./PanelOptions.js";
import { PanelOptionsGaugeEffect } from "./PanelOptionsGaugeEffect.js";
import { PanelOptionsGaugeReduceOptions } from "./PanelOptionsGaugeReduceOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGauge extends PanelOptions {
    setBarShape(barShape: String): this;
    setBarWidthFactor(barWidthFactor: Number): this;
    setEffects(effects: PanelOptionsGaugeEffect): this;
    setNewEffects(onNewCreated: ((item: PanelOptionsGaugeEffect) => PanelOptionsGaugeEffect) | undefined): this;
    withEffects(onWith: (item: PanelOptionsGaugeEffect) => void): this;
    get effects(): PanelOptionsGaugeEffect;
    setEndpointMarker(endpointMarker: String): this;
    setMinVizHeight(minVizHeight: Number): this;
    setMinVizWidth(minVizWidth: Number): this;
    setOrientation(orientation: String): this;
    setReduceOptions(reduceOptions: PanelOptionsGaugeReduceOptions): this;
    setNewReduceOptions(onNewCreated: ((item: PanelOptionsGaugeReduceOptions) => PanelOptionsGaugeReduceOptions) | undefined): this;
    withReduceOptions(onWith: (item: PanelOptionsGaugeReduceOptions) => void): this;
    get reduceOptions(): PanelOptionsGaugeReduceOptions;
    setSegmentCount(segmentCount: Number): this;
    setSegmentSpacing(segmentSpacing: Number): this;
    setShape(shape: String): this;
    setShowThresholdLabels(showThresholdLabels: Boolean): this;
    setShowThresholdMarkers(showThresholdMarkers: Boolean): this;
    setSizing(sizing: String): this;
    setSparkline(sparkline: Boolean): this;
    setTextMode(textMode: String): this;
}
