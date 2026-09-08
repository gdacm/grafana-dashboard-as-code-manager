import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { FieldConfigCustomStat } from "./FieldConfigCustomStat.js";
import { PanelOptionsStat } from "./PanelOptionsStat.js";
import { definePanel } from "./properties/panel.js";

export const Stat = defineGrafanaItemClass('Stat', Panel)
    .with(builder => definePanel(builder, 'stat', FieldConfigCustomStat, PanelOptionsStat, {
        onInit: (instance) => instance.fieldConfig.defaults.setColorMode('palette-classic')
    }))
    .asClass
