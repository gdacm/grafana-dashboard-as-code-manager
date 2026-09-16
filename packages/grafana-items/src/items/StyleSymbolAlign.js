import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const StyleSymbolAlign = defineGrafanaItemClass('StyleSymbolAlign', GrafanaItem)
    .defineValue('horizontal', String)
    .defineValue('vertical', String)
    .asClass
