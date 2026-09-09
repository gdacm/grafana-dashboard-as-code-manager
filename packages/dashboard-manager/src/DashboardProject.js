import { DashboardInfo } from "./DashboardInfo.js";
import { DashboardsInfo } from "./DashboardsInfo.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 */

/**
 * @typedef {{
 *   rootVid: String|undefined,
 *   rootGrafanaFolder: String|undefined,
 *   vidPrefix: String|undefined,
 *   metaOptions: GenericMetaOptions
 * }} DashboardProjectProperties
 */

export class DashboardProject {
    /**
     * @param {String} name
     */
    constructor(name) {
        this._name = name;
        /**
         * @type {DashboardProjectProperties}
         */
        this._properties = {
            rootVid: undefined,
            rootGrafanaFolder: undefined,
            vidPrefix: undefined,
            metaOptions: {},
        };
        /**
         * @type {{[sid: String]: DashboardInfo}}
         */
        this._dashboards = {};

        /**
        * @type {DashboardsInfo[]}
         */
        this._dashboardsCollection = [];
    }

    /**
     * @param {DashboardInfo} dashboardInfo 
     */
    addDashboardInfo(dashboardInfo) {
        if (dashboardInfo.sid) {
            this._dashboards[dashboardInfo.sid] = dashboardInfo;
        }
    }

    /**
     * @param {DashboardsInfo} dashboardsInfo
     */
    addDashboardsInfo(dashboardsInfo) {
        this._dashboardsCollection.push(dashboardsInfo);
    }

    /**
     * @param {String} vid 
     */
    setRootVid(vid) {
        this._properties.rootVid = vid;
    }

    /**
     * @param {String} folder
     */
    setRootGrafanaFolder(folder) {
        this._properties.rootGrafanaFolder = folder;
    }

    /**
     * @param {String} prefix
     */
    setVidPrefix(prefix) {
        this._properties.vidPrefix = prefix;
    }

    /**
     * @param {GenericMetaOptions} metaOptions
     */
    setMetaOptions(metaOptions) {
        this._properties.metaOptions = metaOptions;
    }

    get dashboards() {
        return { ...this._dashboards };
    }

    /**
     * @param {Record<String, String|Number|Boolean|*>} info 
     * @returns {DashboardInfo[]}
     */
    getDashboards(info) {
        /** @type {DashboardInfo[]} */
        const result = [];
        for (const sid in this._dashboards) {
            const dashboardInfo = this._dashboards[sid];
            result.push(dashboardInfo);
        }
        for (const dashboardsInfo of this._dashboardsCollection) {
            for (const dashboardInfo of dashboardsInfo.getItems(info)) {
                result.push(dashboardInfo);
            }
        }
        return result;
    }

    get properties() {
        return { ...this._properties };
    }

    get rootVid() {
        return this._properties.rootVid;
    }

    get rootGrafanaFolder() {
        return this._properties.rootGrafanaFolder;
    }

    get vidPrefix() {
        return this._properties.vidPrefix;
    }

    get metaOptions() {
        return this._properties.metaOptions;
    }
}