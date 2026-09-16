import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { defineAxisConfig } from "./properties/axisConfig.js";
import { defineHideableFieldConfig } from "./properties/hideableFieldConfig.js";
import { StackableFieldConfig } from "./StackableFieldConfig.js";

export const FieldConfigCustomHistogram = defineGrafanaItemClass('FieldConfigCustomHistogram', GrafanaItem)
    .with(
        builder => defineAxisConfig(builder)
    )
    .with(
        builder => defineHideableFieldConfig(builder)
    )
    .defineValue("fillOpacity", Number) // 
    .defineValue("gradientMode", String) // TODO "none" | "opacity" | "hue" | "scheme"
    .defineValue("lineWidth", Number)
    .defineObject("stacking", StackableFieldConfig) 
    .asClass
