import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { OverrideMatcher } from "./OverrideMatcher.js";
import { OverrideProperty } from "./OverrideProperty.js";

export const FieldConfigOverride = defineGrafanaItemClass('FieldConfigOverride', GrafanaItem)
    .defineValue('__systemRef', String, { name: 'systemRef' })
    .defineObject('matcher', OverrideMatcher)
    .defineArray('properties', OverrideProperty, { itemName: 'property' })
    .asClass

