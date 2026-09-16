import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";
import { VizTextDisplayOptions } from "./VizTextDisplayOptions.js";

export const PanelOptionsBarChart = defineGrafanaItemClass('PanelOptionsBarChart', PanelOptions)
    .defineValue('barRadius', Number)
    .defineValue('barWidth', Number)
    .defineValue('colorByField', String)
    .defineValue('fullHighlight', Boolean)
    .defineValue('groupWidth', Number)
    .defineGrafanaObject('legend', VizLegendOptions, {
        onDefault: (options) => new VizLegendOptions(options)
            .setDisplayMode('list')
            .setPlacement('bottom')
            .setShowLegend(false)
    })
    .defineValue('orientation', String)
    .defineValue('showValue', String)
    .defineValue('stacking', String)
    .defineGrafanaObject('text', VizTextDisplayOptions)
    .defineGrafanaObject('tooltip', VizTooltipOptions, {
        onDefault: (options) => new VizTooltipOptions(options)
            .setHideZeros(false)
            .setMode('single')
            .setSort('none')
    })
    .defineValue('xField', String)
    .defineValue('xTickLabelMaxLength', Number)
    .defineValue('xTickLabelRotation', Number)
    .defineValue('xTickLabelSpacing', Number)
    .asClass
