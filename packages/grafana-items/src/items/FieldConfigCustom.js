import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const FieldConfigCustom = defineGrafanaItemClass('FieldConfigCustom', GrafanaItem)
    .asClass
