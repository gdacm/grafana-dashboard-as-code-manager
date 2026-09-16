import { Panel } from "../Panel.js";
import { GrafanaItemClassBuilder } from "../../utils/GrafanaItemClassBuilder.js";
import { FieldConfigDefault } from "../FieldConfigDefault.js";
import { FieldConfigCustom } from "../FieldConfigCustom.js";
import { PanelOptions } from "../PanelOptions.js";

/**
 * @template T
 * @typedef {import("@gdacm/base-types").MetaConstructor<T>} MetaConstructor
 */

/**
 * @template {Panel} T
 * @param {GrafanaItemClassBuilder<T>} builder
 * @param {string} typeName
 * @param {MetaConstructor<FieldConfigCustom>} fieldConfigCustom
 * @param {MetaConstructor<PanelOptions>} panelOptions
 * @param {Object} [options]
 * @param {(instance: T) => void} [options.onInit]
 */
export const definePanel = (builder, typeName, fieldConfigCustom, panelOptions, options) => {
    const { onInit } = options ?? {};
    builder
        .defineConstructor(
            (instance) => {
                instance
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
                    onInit(instance);
                }
            }
        )
        .defineGetterSetter('custom', `${fieldConfigCustom.name}`, {
            typesToInclude: [fieldConfigCustom],
            getter: (instance) => instance.fieldConfig.defaults.custom,
        })
        .defineMethod(`withCustom`, `(code: (custom: ${fieldConfigCustom.name}) => void): this`, {
            typesToInclude: [fieldConfigCustom],
            /** 
             * @param {T} instance 
             * @param {(custom: FieldConfigCustom) => void} code
             * */
            code: (instance, code) => {
                code(instance.fieldConfig.defaults.custom);
                return instance;
            }
        })
        .defineGrafanaObject('options', panelOptions, {
            onDefault: (options) => new panelOptions(options),
        })

}