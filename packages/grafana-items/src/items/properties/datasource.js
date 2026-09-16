import { Datasource } from "../Datasource.js";
import { GrafanaItemClassBuilder } from "../../utils/GrafanaItemClassBuilder.js";

/**
 * @template {Datasource} T
 * @param {GrafanaItemClassBuilder<T>} builder
 * @param {string} typeName
 * @param {Object} [options]
 * @param {(instance: T) => void} [options.onInit]
 */
export const defineDatasource = (builder, typeName, options) => {
    const { onInit } = options ?? {};
    builder
        .defineConstructor(
            (instance) => {
                instance.setType(typeName);
                if (onInit) {
                    onInit(instance);
                }
            }
        )
}