import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const Stacking = defineGrafanaItemClass('Stacking', GrafanaItem)
    .defineValue('group', String)
    .defineValue('mode', String)
    .asClass;
