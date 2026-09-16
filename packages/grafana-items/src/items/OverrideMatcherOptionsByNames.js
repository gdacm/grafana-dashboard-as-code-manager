import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const OverrideMatcherOptionsByNames = defineGrafanaItemClass('OverrideMatcherOptionsByNames', GrafanaItem)
    .defineValue('mode', String)
    .defineBasicArray('names', String)
    .defineValue('prefix', String)
    .defineValue('readOnly', Boolean)
    .asClass