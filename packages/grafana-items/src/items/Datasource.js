import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const Datasource = defineGrafanaItemClass('Datasource', GrafanaItem)
    .defineValue('type', String)
    .defineValue('uid', String)
    .asClass;

