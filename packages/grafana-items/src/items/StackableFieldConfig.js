import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const StackableFieldConfig = defineGrafanaItemClass('StackableFieldConfig', GrafanaItem)
    .defineValue("group", String)
    .defineValue("mode", String) // TODO "none" | "normal" | "percent"
    .asClass
