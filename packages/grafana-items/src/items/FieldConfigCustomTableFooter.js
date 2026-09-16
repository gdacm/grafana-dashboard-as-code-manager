import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const FieldConfigCustomTableFooter = defineGrafanaItemClass('FieldConfigCustomTableFooter', GrafanaItem)
    .defineBasicArray('reducers', String)
    .asClass
