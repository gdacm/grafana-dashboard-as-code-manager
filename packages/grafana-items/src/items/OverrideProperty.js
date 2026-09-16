import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const OverrideProperty = defineGrafanaItemClass('OverrideProperty', GrafanaItem)
    .defineValue('id', String)
    .defineValue('value', Object)
    .asClass
