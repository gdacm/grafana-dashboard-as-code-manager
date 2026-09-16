import { GrafanaItemClassBuilder } from "../../utils/GrafanaItemClassBuilder.js";
import { FieldConfigCustom } from "../FieldConfigCustom.js";
import { HideFrom } from "../HideFrom.js";

/**
 * @template {FieldConfigCustom} T
 * @param {GrafanaItemClassBuilder<T>} builder
 */
export const defineHideableFieldConfig = (builder) => {
    builder
        .defineGrafanaObject('hideFrom', HideFrom, {
            onDefault: (options) => new HideFrom(options)
                .setLegend(false)
                .setTooltip(false)
                .setViz(false)
        })
}