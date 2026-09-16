import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const StyleColor = defineGrafanaItemClass('StyleColor', GrafanaItem)
    .defineValue('fixed', String)
    .asClass
