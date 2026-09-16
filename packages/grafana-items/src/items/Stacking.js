import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const Stacking = defineGrafanaItemClass('Stacking', GrafanaItem)
    .defineValue('group', String)
    .defineValue('mode', String)
    .asClass;
