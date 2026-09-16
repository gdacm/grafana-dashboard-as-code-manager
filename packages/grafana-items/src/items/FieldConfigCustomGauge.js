import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const FieldConfigCustomGauge = defineGrafanaItemClass('FieldConfigCustomGauge', FieldConfigCustom)
    .asClass

