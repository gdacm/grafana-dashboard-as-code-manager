import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsTableSortBy = defineGrafanaItemClass('PanelOptionsTableSortBy', GrafanaItem)
    .defineValue('desc', Boolean)
    .defineValue('displayName', String)
    .asClass
