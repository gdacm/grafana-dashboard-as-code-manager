import { Annotations } from "../items/Annotations.js";
import { Datasource } from "../items/Datasource.js";
import { Template } from "../items/Template.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 */

/**
 * @param {GenericMetaOptions} options 
 * @returns {Annotations}
 */
export const getAnnotations = (options) =>
    new Annotations(options)
        .addNewAnnotation(
            annotation => annotation
                .setBuiltIn(1)
                .setNewDatasource(
                    datasource => datasource
                        .setType('grafana')
                        .setUid('-- Grafana --')
                )
                .setEnable(true)
                .setHide(true)
                .setIconColor('rgba(0, 211, 255, 1)')
                .setName('Annotations & Alerts')
                .setType('dashboard')
        )

/**
 * @param {String} name
 * @param {String} templateName
 * @param {GenericMetaOptions} metaOptions
 * @returns {Datasource}
 */
export const getDatasourceWithTemplateName = (name, templateName, metaOptions) => {
    return new Datasource(metaOptions)
        .setType(name)
        .setUid(`${"${"}${templateName}}`);
}

/**
 * @param {String} type
 * @param {String} name
 * @param {String} uid
 * @param {GenericMetaOptions} metaOptions
 * @returns {Object}
 */
export const getTemplateDatesource = (type, name, uid, metaOptions) => {
    // return new Template(metaOptions).setCurrent({ text: type, value: uid }).setDescription("").setHide(2).setLabel("Datasource").setName(name).setQuery(type).setRefresh(1).setType("datasource");
    return {
        current: {
            text: type,
            value: uid
        },
        description: "",
        hide: 2,
        label: null,
        name: name,
        options: [],
        query: type,
        refresh: 1,
        type: "datasource",
    }
}
