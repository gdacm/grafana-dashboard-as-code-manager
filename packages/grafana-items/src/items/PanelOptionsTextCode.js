import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const PanelOptionsTextCode = defineGrafanaItemClass('PanelOptionsTextCode', GrafanaItem)
    .defineValue('language', String)
    .defineValue('showLineNumbers', Boolean)
    .defineValue('showMiniMap', Boolean)
    .asClass;
