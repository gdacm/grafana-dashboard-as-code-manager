import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsTableSortBy } from "./PanelOptionsTableSortBy.js";

export const PanelOptionsTable = defineGrafanaItemClass('PanelOptionsTable', PanelOptions)
    .defineValue('cellHeight', String)
    .defineValue('showHeader', Boolean)
    .defineArray('sortBy', PanelOptionsTableSortBy)
    .asClass
