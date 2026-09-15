import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { defineHideableFieldConfig } from "./properties/hideableFieldConfig.js";

export const FieldConfigCustomPieChart = defineGrafanaItemClass('FieldConfigCustomPieChart', FieldConfigCustom)
    .with(
        (builder) => defineHideableFieldConfig(builder)
    )
    .asClass
