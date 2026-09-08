import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const FieldConfigCustom = defineGrafanaItemClass('FieldConfigCustom', GrafanaItem)
    .asClass
