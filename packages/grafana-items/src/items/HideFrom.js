import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const HideFrom = defineGrafanaItemClass('HideFrom', GrafanaItem)
    .defineValue('graph', Boolean) // Grafana 13
    .defineValue('legend', Boolean)
    .defineValue('tooltip', Boolean)
    .defineValue('viz', Boolean)
    .asClass
