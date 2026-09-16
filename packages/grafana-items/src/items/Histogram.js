import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { definePanel } from "./properties/panel.js";
import { PanelOptionsHistogram } from "./PanelOptionsHistogram.js";
import { FieldConfigCustomHistogram } from "./FieldConfigCustomHistogram.js";

export const Histogram = defineGrafanaItemClass('Histogram', Panel)
    .with(builder => definePanel(builder, 'histogram', FieldConfigCustomHistogram, PanelOptionsHistogram, {
        onInit: (instance) => {
            instance.fieldConfig.defaults.setColorMode('palette-classic');
            instance.fieldConfig.defaults.thresholds.setMode('absolute');
        }
    }))
    .asClass
