import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const FieldConfigCustomTableFooter = defineGrafanaItemClass('FieldConfigCustomTableFooter', GrafanaItem)
    .defineArray('reducers', String)
    .asClass
