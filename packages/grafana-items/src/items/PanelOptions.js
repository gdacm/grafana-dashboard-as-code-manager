import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptions = defineGrafanaItemClass('PanelOptions', GrafanaItem)
    .asClass
