import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGauge } from "./PanelOptionsGauge.js";
import { definePanel } from "./properties/panel.js";
import { FieldConfigCustomGauge } from "./FieldConfigCustomGauge.js";

export const Gauge = defineGrafanaItemClass('Gauge', Panel)
    .with(builder => definePanel(builder, 'gauge', FieldConfigCustomGauge, PanelOptionsGauge, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic');
        }
    }))
    .asClass
