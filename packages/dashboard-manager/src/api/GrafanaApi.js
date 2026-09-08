import { getGrafanaId } from "../utils/id.js";
import { getJson, postJson, putJson } from "./httpClient/index.js";

export class GrafanaApi {
    /**
     * @param {Object} [options]
     * @param {String} [options.apiUrl] - The base URL of the Grafana API
     * @param {String} [options.apiToken] - The API token for authentication
     */
    constructor(options) {
        if (options?.apiUrl) {
            this.rootUrl = options.apiUrl;
        }
        if (options?.apiToken) {
            this.token = options.apiToken;
        }
    }

    /**
     * @returns {{token: String, rootUrl: String}} - The parameters for the Grafana API
     */
    get _parameters() {
        if (!this.token || !this.rootUrl) {
            throw new Error("GrafanaApi: Missing required parameters. Please provide both 'apiUrl' and 'apiToken'.");
        }
        return {
            token: this.token,
            rootUrl: this.rootUrl,
        }
    }

    /**
     * @param {String} folderVid
     * @returns {Promise<Object>} - The response from the Grafana API for the folder information as a json object
     */
    async getFolder(folderVid) {
        const folderUid = getGrafanaId(folderVid);
        const { token, rootUrl } = this._parameters;
        
        const response = await getJson(`${rootUrl}/api/folders/${folderUid}`, { token });
        return response;
    }

    /**
     * @param {String} folderName 
     * @param {String} folderVid 
     * @param {String|undefined} parentVid 
     * @returns {Promise<Object>} The response from the Grafana API
     */
    async createFolder(folderName, folderVid, parentVid) {
        const folderUid = getGrafanaId(folderVid);
        const parentUid = getGrafanaId(parentVid);
        const { token, rootUrl } = this._parameters;
        const response = await postJson(
            `${rootUrl}/api/folders`,
            {
                uid: folderUid,
                title: folderName,
                parentUid: parentUid,
            },
            { token }
        )
        return response;
    }


    /**
     * 
     * @param {String} folderVid 
     * @param {String} newFolderName 
     * @param {String|undefined} parentVid 
     * @param {Number} version 
     */
    async renameFolder(folderVid, newFolderName, parentVid, version) {
        const folderUid = getGrafanaId(folderVid);
        const parentUid = getGrafanaId(parentVid);
        const { token, rootUrl } = this._parameters;
        const response = await putJson(
            `${rootUrl}/api/folders/${folderUid}`,
            {
                uid: folderUid,
                title: newFolderName,
                parentUid: parentUid,
                version: version,
            },
            { token }
        )
        return response;
    }

    /**
     * @param {Object} dashboardStruct 
     * @param {String} folderVid 
     * @param {String} message 
     * @returns {Promise<Object>} The response from the Grafana API
     */
    async createDashboard(dashboardStruct, folderVid, message) {
        const folderUid = getGrafanaId(folderVid);
        const { token, rootUrl } = this._parameters;
        const response = await postJson(
            `${rootUrl}/api/dashboards/db`,
            {
                dashboard: dashboardStruct,
                folderUid: folderUid,
                message: message,
                overwrite: true,
            },
            { token }
        )
        return response;
    }
}