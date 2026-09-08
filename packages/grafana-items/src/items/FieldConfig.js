import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { FieldConfigDefault } from "./FieldConfigDefault.js";
import { FieldConfigOverride } from "./FieldConfigOverride.js";
import { OverrideMatcherOptionsByNames } from "./OverrideMatcherOptionsByNames.js";
import { HideFrom } from "./HideFrom.js";

export const FieldConfig = defineGrafanaItemClass('FieldConfig', GrafanaItem)
    .defineObject('defaults', FieldConfigDefault, {
    })
    .defineArray('overrides', FieldConfigOverride)
    .defineMethod('addNewOverrideHideSeriesFrom', '(names: string[]): this', {
        /**
         * @param {FieldConfig} fieldConfig
         * @param {String[]} names
         * @returns {FieldConfigOverride}
         */
        code: (fieldConfig, names) => {
            /**
             * @param {OverrideMatcherOptionsByNames} matcher
             * @returns {OverrideMatcherOptionsByNames}
             */
            const reduceForNames = (matcher) => names.reduce(
                (matcher, name) => matcher.addName(name),
                matcher
            );
            return fieldConfig.addNewOverride(
                (override) => override
                    .setSystemRef('hideSeriesFrom')
                    .setNewMatcher(
                        (overrideMatcher) => overrideMatcher
                            .setId('byNames')
                            .setOptions(
                                reduceForNames(new OverrideMatcherOptionsByNames())
                                    .setMode('exclude')
                                    .setPrefix('All except:')
                                    .setReadOnly(true)
                            )
                    )
                    .addNewProperty(
                        (property) => property
                            .setId('custom.hideFrom')
                            .setValue(
                                new HideFrom()
                                    .setLegend(false)
                                    .setTooltip(true)
                                    .setViz(true)
                            )
                    )
            );
        }
    })
    .asClass

