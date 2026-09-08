import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { FieldConfigCustomText } from "./FieldConfigCustomText.js";
import { PanelOptionsText } from "./PanelOptionsText.js";
import { definePanel } from "./properties/panel.js";

export const TextPanel = defineGrafanaItemClass('TextPanel', Panel)
    .with(builder => definePanel(builder, 'text', FieldConfigCustomText, PanelOptionsText))
    .asClass
