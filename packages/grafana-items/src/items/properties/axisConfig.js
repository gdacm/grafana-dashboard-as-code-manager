import { GrafanaItemClassBuilder } from "../../utils/typesDefinition.js";
import { ScaleDistribution } from "../ScaleDistribution.js";
/**
 * @param {GrafanaItemClassBuilder} builder
 */
export const defineAxisConfig = (builder) => {
    builder
        .defineValue('axisBorderShow', Boolean)
        .defineValue('axisCenteredZero', Boolean)
        .defineValue('axisColorMode', String)
        .defineValue('axisGridShow', Boolean)
        .defineValue('axisLabel', String)
        .defineValue('axisPlacement', String)
        .defineValue('axisSoftMax', Number)
        .defineValue('axisSoftMin', Number)
        .defineValue('axisWidth', Number)
        .defineObject('scaleDistribution', ScaleDistribution, {
            onDefault: (options) => new ScaleDistribution(options).setType('linear'),
        })
}
