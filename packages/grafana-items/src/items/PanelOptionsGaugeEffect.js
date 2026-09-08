import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsGaugeEffect = defineGrafanaItemClass('PanelOptionsGaugeEffect', GrafanaItem)
    .defineValue('barGlow', Boolean)
    .defineValue('centerGlow', Boolean)
    .defineValue('gradient', Boolean)
    .asClass
