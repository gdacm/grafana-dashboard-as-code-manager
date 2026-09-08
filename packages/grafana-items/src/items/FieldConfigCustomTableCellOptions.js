import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const FieldConfigCustomTableCellOptions = defineGrafanaItemClass('FieldConfigCustomTableCellOptions', GrafanaItem)
    .defineValue('type', String)
    .asClass

