import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const DataTransformation = defineGrafanaItemClass('DataTransformation', GrafanaItem)
    .asClass
