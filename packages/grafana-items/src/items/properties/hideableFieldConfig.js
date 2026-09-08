import { GrafanaItemClassBuilder } from "../../utils/typesDefinition.js";
import { HideFrom } from "../HideFrom.js";

/**
 * @param {GrafanaItemClassBuilder} builder
 */
export const defineHideableFieldConfig = (builder) => {
    builder
        .defineObject('hideFrom', HideFrom, {
            onDefault: (options) => new HideFrom(options)
                .setLegend(false)
                .setTooltip(false)
                .setViz(false)
        })
}