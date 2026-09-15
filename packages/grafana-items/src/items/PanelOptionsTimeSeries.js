import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

import { VizLegendOptions } from "./VizLegendOptions.js";
import { VizTooltipOptions } from "./VizTooltipOptions.js";

export const PanelOptionsTimeSeries = defineGrafanaItemClass('PanelOptionsTimeSeries', PanelOptions)
    .defineValue('disableKeyboardEvents', Boolean)
    .defineGrafanaObject('legend', VizLegendOptions, {
        onDefault: (options) => new VizLegendOptions(options)
            .setDisplayMode('list')
            .setPlacement('bottom')
            .setShowLegend(false)
    })
    .defineValue('orientation', String)
    // .defineGrafanaObject('timeCompare', )
    // .define('timezone', )
    .defineGrafanaObject('tooltip', VizTooltipOptions, {
        onDefault: (options) => new VizTooltipOptions(options)
            .setHideZeros(false)
            .setMode('single')
            .setSort('none')
    })
    .asClass
