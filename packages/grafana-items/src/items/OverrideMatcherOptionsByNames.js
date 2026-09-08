import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const OverrideMatcherOptionsByNames = defineGrafanaItemClass('OverrideMatcherOptionsByNames', GrafanaItem)
    .defineValue('mode', String)
    .defineArray('names', String)
    .defineValue('prefix', String)
    .defineValue('readOnly', Boolean)
    .asClass