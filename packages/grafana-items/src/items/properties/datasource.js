import { Datasource } from "../Datasource.js";
import { GrafanaItemClassBuilder } from "../../utils/typesDefinition.js";

/**
 * @param {GrafanaItemClassBuilder} builder
 * @param {string} typeName
 * @param {Object} [options]
 * @param {(instance: Datasource) => void} [options.onInit]
 */
export const defineDatasource = (builder, typeName, options) => {
    const { onInit } = options ?? {};
    builder
        .defineConstructor(
            (instance) => {
                const self = /** @type {Datasource} */ (instance);
                
                self.setType(typeName);
                if (onInit) {
                    onInit(self);
                }
            }
        )
}