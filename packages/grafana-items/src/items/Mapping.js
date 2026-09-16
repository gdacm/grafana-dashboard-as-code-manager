import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const Mapping = defineGrafanaItemClass('Mapping', GrafanaItem)
    .asClass
