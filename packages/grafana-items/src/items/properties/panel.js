import { Panel } from "../Panel.js";
import { GrafanaItemClassBuilder } from "../../utils/typesDefinition.js";
import { FieldConfigDefault } from "../FieldConfigDefault.js";
import { FieldConfigCustom } from "../FieldConfigCustom.js";
import { PanelOptions } from "../PanelOptions.js";
import { GrafanaItem } from "../GrafanaItem.js";

/**
 * @param {GrafanaItemClassBuilder} builder
 * @param {string} typeName
 * @param {typeof FieldConfigCustom} fieldConfigCustom
 * @param {typeof PanelOptions} panelOptions
 * @param {Object} [options]
 * @param {(instance: Panel) => void} [options.onInit]
 */
export const definePanel = (builder, typeName, fieldConfigCustom, panelOptions, options) => {
    const { onInit } = options ?? {};
    builder
        .defineConstructor(
            (instance) => {
                const self = /** @type {Panel} */ (instance);
                self
                    .setType(typeName)
                    .withFieldConfig(
                        fieldConfig => fieldConfig
                            .setDefaults(
                                new FieldConfigDefault(instance.metaOptions)
                                    .setCustom(
                                        new fieldConfigCustom(instance.metaOptions)
                                    )
                            )
                    )
                if (onInit) {
                    onInit(self);
                }
            }
        )
        .defineGetterSetter('custom', `${fieldConfigCustom.name}`, {
            typesToInclude: [fieldConfigCustom],
            getter: (instance) => (/** @type {Panel} */ (instance)).fieldConfig.defaults.custom,
        })
        .defineMethod(`withCustom`, `(code: (custom: ${fieldConfigCustom.name}) => void): this`, {
            typesToInclude: [fieldConfigCustom],
            /** 
             * @param {Panel} instance 
             * @param {(custom: FieldConfigCustom) => void} code
             * */
            code: (instance, code) => {
                code(instance.fieldConfig.defaults.custom);
                return instance;
            }
        })
        .defineObject('options', panelOptions, {
            setNew: true,
            onDefault: (options) => new panelOptions(options),
        })

}