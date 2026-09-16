import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const OverrideMatcher = defineGrafanaItemClass('OverrideMatcher', GrafanaItem)
    .defineValue('id', String)
    .defineObject('options', Object)
    .asClass
