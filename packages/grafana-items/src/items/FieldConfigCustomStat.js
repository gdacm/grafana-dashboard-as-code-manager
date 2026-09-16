import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const FieldConfigCustomStat = defineGrafanaItemClass('FieldConfigCustomStat', FieldConfigCustom)
    .asClass
