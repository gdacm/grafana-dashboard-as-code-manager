import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const HideFrom = defineGrafanaItemClass('HideFrom', GrafanaItem)
    .defineValue('legend', Boolean)
    .defineValue('tooltip', Boolean)
    .defineValue('viz', Boolean)
    .asClass
