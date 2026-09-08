import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const StyleColor = defineGrafanaItemClass('StyleColor', GrafanaItem)
    .defineValue('fixed', String)
    .asClass
