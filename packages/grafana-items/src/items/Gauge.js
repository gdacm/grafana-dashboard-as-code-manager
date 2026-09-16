import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { PanelOptionsGauge } from "./PanelOptionsGauge.js";
import { definePanel } from "./properties/panel.js";
import { FieldConfigCustomGauge } from "./FieldConfigCustomGauge.js";

export const Gauge = defineGrafanaItemClass('Gauge', Panel)
    .with(builder => definePanel(builder, 'gauge', FieldConfigCustomGauge, PanelOptionsGauge, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic');
            instance.fieldConfig.defaults.thresholds.setMode('absolute');
        }
    }))
    .asClass
