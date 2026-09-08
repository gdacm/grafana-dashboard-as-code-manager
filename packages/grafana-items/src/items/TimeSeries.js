import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsTimeSeries } from "./PanelOptionsTimeSeries.js";
import { FieldConfigCustomTimeSerie } from "./FieldConfigCustomTimeSerie.js";
import { definePanel } from "./properties/panel.js";

export const TimeSeries = defineGrafanaItemClass('TimeSeries', Panel)
    .with(builder => definePanel(builder, 'timeseries', FieldConfigCustomTimeSerie, PanelOptionsTimeSeries, {
        onInit: (instance) => instance.fieldConfig.defaults.setColorMode('palette-classic'),
    }))
    .defineMethod('setThresholdsStyleArea', '(): this', {
        code: (instance) => {
            instance.custom.thresholdsStyle.setMode('area');
            return instance;
        }
    })
    .asClass
