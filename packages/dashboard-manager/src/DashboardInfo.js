import { GrafanaItem } from "@gdacm/grafana-items";
import { FolderInfo } from "./FolderInfo.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 * @typedef {import("@gdacm/base-types").DashboardMetaOptions} DashboardMetaOptions
 */

/**
 * @typedef {FolderInfo|String} FolderInfoDefinition
 */


export class DashboardInfo {
    constructor() {
        /** @type {string|undefined} */
        this._sid = undefined;
        /** @type {string|undefined} */
        this._vid = undefined;
        /** @type {string|undefined} */
        this._grafanaId = undefined;
        /** @type {string|undefined} */
        this._title = undefined;
        /** @type {string|undefined} */
        this._emoji = undefined;
        /** @type {FolderInfoDefinition[]} */
        this._path = [];
        /** @type {string[]} */
        this._tags = [];
        /**
         * @type {GenericMetaOptions} 
         */
        this._metaOptions = {};
        /** @type {((uid: string, metaOptions: DashboardMetaOptions) => Promise<GrafanaItem>)|undefined} */
        this._dashboardGenerator = undefined;
    }

    /**
     * @returns {string|undefined}
     */
    get sid() {
        return this._sid;
    }

    /**
     * @param {string} sid
     * @returns {this}
     */
    setSid(sid) {
        this._sid = sid;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get vid() {
        return this._vid;
    }

    /**
     * @param {string} vid
     * @returns {this}
     **/
    setVid(vid) {
        this._vid = vid;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get grafanaId() {
        return this._grafanaId;
    }

    /**
     * @param {string} grafanaId
     * @returns {this}
     */
    setGrafanaId(grafanaId) {
        this._grafanaId = grafanaId;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get title() {
        return this._title;
    }

    /**
     * @param {string} title
     * @returns {this}
     */
    setTitle(title) {
        this._title = title;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get emoji() {
        return this._emoji;
    }

    /**
     * @param {string} emoji
     * @returns {this}
     */
    setEmoji(emoji) {
        this._emoji = emoji;
        return this;
    }

    /**
     * @returns {FolderInfoDefinition[]}
     */
    get path() {
        return [...this._path];
    }

    /**
     * @param {FolderInfoDefinition[]} path
     * @returns {this}
     */
    setPath(path) {
        this._path = [...path];
        return this;
    }

    /**
     * @param {FolderInfoDefinition[]} path
     * @returns {this}
     */
    injectIntoPath(path) {
        this._path = [...path, ...this._path];
        return this;
    }

    /**
     * @returns {string[]}
     */
    get tags() {
        return this._tags;
    }

    /**
     * @param {string[]} tags
     * @returns {this}
     */
    setTags(tags) {
        this._tags = tags;
        return this;
    }

    /**
     * @returns {GenericMetaOptions}
     */
    get metaOptions() {
        return this._metaOptions;
    }

    /**
     * @param {string} key
     * @param {any} value 
     * @returns {this}
     */
    addMetaOption(key, value) {
        this._metaOptions[key] = value;
        return this;
    }

    /**
     * @returns {((uid: string, metaOptions: DashboardMetaOptions) => Promise<GrafanaItem>)|undefined}
     */
    get getDashboard() {
        return this._dashboardGenerator;
    }

    /**
     * @param {((uid: string, metaOptions: DashboardMetaOptions) => Promise<GrafanaItem>)|undefined} dashboardGenerator
     * @returns {this}
     */
    setDashboardGenerator(dashboardGenerator) {
        this._dashboardGenerator = dashboardGenerator;
        return this;
    }
}
