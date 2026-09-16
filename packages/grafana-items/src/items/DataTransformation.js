import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const DataTransformation = defineGrafanaItemClass('DataTransformation', GrafanaItem)
    .asClass
