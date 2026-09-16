import { PanelOptions } from "./PanelOptions.js";
import { PanelOptionsGaugeEffect } from "./PanelOptionsGaugeEffect.js";
import { PanelOptionsGaugeReduceOptions } from "./PanelOptionsGaugeReduceOptions.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGauge extends PanelOptions {
    get barShape(): String;
    setBarShape(barShape: String): this;
    get barWidthFactor(): Number;
    setBarWidthFactor(barWidthFactor: Number): this;
    setEffects(effects: PanelOptionsGaugeEffect): this;
    setNewEffects(onNewCreated: ((item: PanelOptionsGaugeEffect) => PanelOptionsGaugeEffect) | undefined): this;
    withEffects(onWith: (item: PanelOptionsGaugeEffect) => void): this;
    get effects(): PanelOptionsGaugeEffect;
    get endpointMarker(): String;
    setEndpointMarker(endpointMarker: String): this;
    get minVizHeight(): Number;
    setMinVizHeight(minVizHeight: Number): this;
    get minVizWidth(): Number;
    setMinVizWidth(minVizWidth: Number): this;
    get orientation(): String;
    setOrientation(orientation: String): this;
    setReduceOptions(reduceOptions: PanelOptionsGaugeReduceOptions): this;
    setNewReduceOptions(onNewCreated: ((item: PanelOptionsGaugeReduceOptions) => PanelOptionsGaugeReduceOptions) | undefined): this;
    withReduceOptions(onWith: (item: PanelOptionsGaugeReduceOptions) => void): this;
    get reduceOptions(): PanelOptionsGaugeReduceOptions;
    get segmentCount(): Number;
    setSegmentCount(segmentCount: Number): this;
    get segmentSpacing(): Number;
    setSegmentSpacing(segmentSpacing: Number): this;
    get shape(): String;
    setShape(shape: String): this;
    get showThresholdLabels(): Boolean;
    setShowThresholdLabels(showThresholdLabels: Boolean): this;
    get showThresholdMarkers(): Boolean;
    setShowThresholdMarkers(showThresholdMarkers: Boolean): this;
    get sizing(): String;
    setSizing(sizing: String): this;
    get sparkline(): Boolean;
    setSparkline(sparkline: Boolean): this;
    get textMode(): String;
    setTextMode(textMode: String): this;
}
