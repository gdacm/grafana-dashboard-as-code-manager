import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { Datasource } from "./Datasource.js";

export const Target = defineGrafanaItemClass('Target', GrafanaItem)
    .defineObject('datasource', Datasource)
    .asClass
