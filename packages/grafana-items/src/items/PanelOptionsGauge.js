import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGaugeEffect } from "./PanelOptionsGaugeEffect.js";
import { PanelOptionsGaugeReduceOptions } from "./PanelOptionsGaugeReduceOptions.js";

export const PanelOptionsGauge = defineGrafanaItemClass('PanelOptionsGauge', PanelOptions)
    .defineValue('barShape', String)
    .defineValue('barWidthFactor', Number)
    .defineObject('effects', PanelOptionsGaugeEffect, { setNew: true })
    .defineValue('endpointMarker', String)
    .defineValue('minVizHeight', Number)
    .defineValue('minVizWidth', Number)
    .defineValue('orientation', String)
    .defineObject('reduceOptions', PanelOptionsGaugeReduceOptions, { setNew: true })
    .defineValue('segmentCount', Number)
    .defineValue('segmentSpacing', Number)
    .defineValue('shape', String)
    .defineValue('showThresholdLabels', Boolean)
    .defineValue('showThresholdMarkers', Boolean)
    .defineValue('sizing', String)
    .defineValue('sparkline', Boolean)
    .defineValue('textMode', String)
    .asClass
