import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { HideFrom } from "./HideFrom.js";

export const FieldConfigCustomGeomap = defineGrafanaItemClass('FieldConfigCustomGeomap', FieldConfigCustom)
    .defineObject('hideFrom', HideFrom, {
        onDefault: (options) => new HideFrom(options)
            .setLegend(false)
            .setTooltip(false)
            .setViz(false),
    })
    .asClass
