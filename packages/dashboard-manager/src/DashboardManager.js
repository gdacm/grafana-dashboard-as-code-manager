import { ensurePathExists, writeJsonFile } from './utils/io.js';
import { DashboardProject } from './DashboardProject.js';
import { getGrafanaId, getSlug } from './utils/id.js';
import { GrafanaApi } from './api/GrafanaApi.js';
import { FolderInfo } from './FolderInfo.js';
import { getFromOptionsOrInfo, mergeOptions } from './info.js';
import { DashboardsInfo } from './DashboardsInfo.js';

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 * @typedef {import("@gdacm/base-types").DashboardMetaOptions} DashboardMetaOptions
 * @typedef {import("@gdacm/base-types").DashboardOptions} DashboardOptions
 */

/**
 * @typedef {(uid: String, option: Object) => Promise<Object>} DashboardGenerator
 */

export class DashboardManager {
    constructor() {
        /**
         * @type {{[projectName: string]: DashboardProject}}
         */
        this.dashboards = {};
    }

    /**
     * Log information to the console.
     * @param  {...any} args - The arguments to log
     */
    #log(...args) {
        console.log(...args);
    }

    /**
     * @param {string} projectName 
     * @returns {DashboardProject} The project object
     */
    _ensureProjectExists(projectName) {
        if (!this.dashboards[projectName]) {
            this.dashboards[projectName] = new DashboardProject(projectName);
        }
        return this.dashboards[projectName];
    }

    /**
     * @param {string} projectName 
        * @param {DashboardsInfo} dashboardsInfo
     * @returns {this}
     */
    registerDashboards(projectName, dashboardsInfo) {
        const project = this._ensureProjectExists(projectName);
        project.addDashboardsInfo(dashboardsInfo);
        return this;
    }

    /**
     * @param {string} projectName 
     * @param {string} rootVid 
     * @param {string} rootGrafanaFolder 
     * @param {string|undefined} vidPrefix
     * @param {GenericMetaOptions} metaOptions 
     * @returns {this}
     */
    setupProject(projectName, rootVid, rootGrafanaFolder, vidPrefix, metaOptions) {
        const project = this._ensureProjectExists(projectName);
        project.setRootVid(rootVid);
        project.setRootGrafanaFolder(rootGrafanaFolder);
        if (vidPrefix) {
            project.setVidPrefix(vidPrefix);
        }
        project.setMetaOptions(metaOptions);
        return this;
    }

    /**
     * @param {string} projectName 
     * @param {string} rootFolderPath 
     * @param {GenericMetaOptions} [metaOptions] - Optional parameters for generating dashboards
     * @returns {Promise<this>}
     */
    async generateDashboards(projectName, rootFolderPath, metaOptions) {
        const projectDashboards = this._ensureProjectExists(projectName);
        const localProjectMetaOptions = /** @type {GenericMetaOptions} */ (mergeOptions(projectDashboards.metaOptions, metaOptions));

        /** @type {Boolean|undefined} */
        const writeOnDisk = getFromOptionsOrInfo('writeOnDisk', localProjectMetaOptions, true);
        /** @type {Boolean|undefined} */
        const createOnGrafana = getFromOptionsOrInfo('createOnGrafana', localProjectMetaOptions, true);
        /** @type {String|undefined} */
        const testName = getFromOptionsOrInfo('testName', localProjectMetaOptions, undefined);

        this.#log(`🔨📊 Generating dashboards for project: ${projectName} in folder: ${rootFolderPath} ${testName ? `with test name: ${testName}` : ''}`);
        if (!projectDashboards) {
            throw new Error(`No dashboards registered for project: ${projectName}`);
        }
        /**
         * @type {Object.<string, {sid: string, vid: string, name: string, parentVid: string|undefined, folderPath: string}>}
         */
        const foldersToCreate = {};
        const dashboardsToCreate = [];
        const { apiToken, apiUrl } = localProjectMetaOptions.info || {};
        const projectRootVid = projectDashboards.rootVid;
        if (!projectRootVid) {
            throw new Error(`No rootVid defined for project: ${projectName}`);
        }
        let projectVidPrefix = projectDashboards.vidPrefix
        if (!projectVidPrefix) {
            // Should never occurs as projectRootVid is not undefined, and vidPrefix should default to projectRootVid.
            // If it fails here, it means a change has been made to the code that broke this assumption. Should rethink something here.
            throw new Error(`No vidPrefix defined for project: ${projectName}`);
        }
        let projectRootGrafanaFolder = projectDashboards.rootGrafanaFolder;
        if (!projectRootGrafanaFolder) {
            projectRootGrafanaFolder = projectName;
        }
        let projectFolderPath = rootFolderPath;

        foldersToCreate[projectVidPrefix] = {
            folderPath: projectFolderPath,
            name: projectRootGrafanaFolder,
            parentVid: undefined,
            sid: getSlug(projectRootGrafanaFolder),
            vid: projectRootVid,
        }

        if (testName) {
            const testVid = `${projectVidPrefix}-t`;
            const testFolderPath = `${projectFolderPath}/__test__`;
            if (!foldersToCreate[testVid]) {
                foldersToCreate[testVid] = {
                    sid: `t`,
                    vid: testVid,
                    name: "🧪 __test__",
                    parentVid: projectVidPrefix,
                    folderPath: testFolderPath,
                }
            }
            projectFolderPath = testFolderPath;
            projectVidPrefix = testVid;
            const testNameVid = `${projectVidPrefix}-${getSlug(testName)}`;
            const testNameFolderPath = `${projectFolderPath}/${getSlug(testName)}`;
            if (!foldersToCreate[testNameVid]) {
                foldersToCreate[testNameVid] = {
                    sid: getSlug(testName),
                    vid: testNameVid,
                    name: `🧪 ${testName}`,
                    parentVid: projectVidPrefix,
                    folderPath: testNameFolderPath,
                }
            }
            projectFolderPath = testNameFolderPath;
            projectVidPrefix = testNameVid;
        }

        for (const dashboardInfo of projectDashboards.getDashboards(localProjectMetaOptions.info || {})) {
            const sid = dashboardInfo.sid;
            this.#log(`📊 Generating dashboard: ${sid}`);

            const localDashboardMetaOptions = mergeOptions(localProjectMetaOptions, dashboardInfo.metaOptions)

            /** @type {String[]} */
            const tagsPublished = getFromOptionsOrInfo('tagsPublished', localDashboardMetaOptions, ['published']);

            /** @type {String[]} */
            const tagsPreview = getFromOptionsOrInfo('tagsPreview', localDashboardMetaOptions, ['preview']);

            const vid = `${projectVidPrefix}-${sid}`;
            const uid = getGrafanaId(vid) || '';

            let title = dashboardInfo.title || 'Untitled Dashboard';
            let emoji = testName ? "🧪" : (dashboardInfo.emoji || "📈");
            if (emoji && emoji !== '') {
                title = `${emoji} ${title}`;
            }

            /**
             * @type{DashboardOptions}
             */
            const additionnalOptions = {
                title,
                tags: [],
            };

            if (testName) {
                additionnalOptions.testName = testName;
                additionnalOptions.tags.push(...tagsPreview);
            } else {
                additionnalOptions.tags.push(...tagsPublished);
            }
            additionnalOptions.tags.push(...dashboardInfo.tags);

            const dashboardStruct = await dashboardInfo.getDashboard?.(
                uid,
                mergeOptions(localDashboardMetaOptions, additionnalOptions)
            );
            if (dashboardStruct) {
                this.#log(`📊 Creating dashboard for sid: ${dashboardInfo.sid} (${title})`);
                const path = dashboardInfo.path || [];
                const newPath = [];
                /** @type {String} */
                let folderPath = projectFolderPath;
                /** @type {String} */
                let folderVid = projectVidPrefix;
                for (const pathItem of path) {
                    /** @type {String} */
                    let sid = '';
                    /** @type {String} */
                    let name = '';
                    let emoji = '';
                    if (pathItem instanceof FolderInfo) {
                        sid = pathItem.sid || '';
                        name = pathItem.name || '';
                        emoji = pathItem.emoji || '';
                    } else if (typeof pathItem === 'string') {
                        sid = getSlug(pathItem);
                        name = pathItem;
                        emoji = '';
                    } else {
                        throw new Error(`Invalid path item: ${pathItem}`);
                    }
                    if (testName) {
                        emoji = "🧪";
                    }
                    if (!testName && (!emoji || emoji === '')) {
                        emoji = '📚';
                    }

                    if (emoji && emoji !== '') {
                        name = `${emoji} ${name}`;
                    }
                    newPath.push({ sid, name });
                    folderPath = `${folderPath}/${sid}`;
                    const parentVid = folderVid;
                    folderVid = `${parentVid}-${sid}`;
                    if (!foldersToCreate[folderVid]) {
                        foldersToCreate[folderVid] = {
                            sid,
                            vid: folderVid,
                            name,
                            parentVid,
                            folderPath,
                        }
                    }
                }
                dashboardsToCreate.push({
                    uid,
                    vid,
                    sid,
                    title,

                    content: dashboardStruct.asJson(),
                    folderVid,
                    folderPath,
                    message: `📊 Autogenerated dashboard for project: ${projectName}, dashboard: ${title}`,
                });
            }
        }
        if (writeOnDisk) {
            for (const folderInfo of Object.values(foldersToCreate)) {
                await ensurePathExists(folderInfo.folderPath);
            }
            for (const dashboardToCreate of dashboardsToCreate) {
                const { sid, content, folderPath } = dashboardToCreate;
                const filePath = `${folderPath}/${sid}.json`;
                this.#log(`📝 Writing dashboard to file: ${filePath}`);
                await writeJsonFile(filePath, content);
            }
        }
        if (createOnGrafana) {
            const grafanaApi = new GrafanaApi({ apiUrl, apiToken });
            this.#log(`🖥️ Creating dashboards on Grafana ${apiUrl} for project "${projectName}"`);
            for (const folderInfo of Object.values(foldersToCreate)) {
                try {
                    const response = await grafanaApi.getFolder(folderInfo.vid);
                    // @ts-ignore
                    const { title, version, parentUid } = response;
                    const nameHasChanged = folderInfo.name && folderInfo.name.trim() !== '' && folderInfo.name !== title;
                    const parentVidHasChanged = folderInfo.parentVid !== undefined && getGrafanaId(folderInfo.parentVid) !== parentUid;
                    if (nameHasChanged || parentVidHasChanged) {
                        this.#log(`📂 Folder with vid: ${folderInfo.vid} has a different name on Grafana: ${title}, renaming to: ${folderInfo.name}`);
                        await grafanaApi.renameFolder(folderInfo.vid, folderInfo.name, folderInfo.parentVid, version);
                    }
                } catch (error) {
                    this.#log(`📁 Folder not found (or name mismatch) on Grafana, creating folder: ${folderInfo.name} with vid: ${folderInfo.vid}`);
                    await grafanaApi.createFolder(folderInfo.name, folderInfo.vid, folderInfo.parentVid);
                }
            }
            for (const dashboardToCreate of dashboardsToCreate) {
                const { content, title, folderVid } = dashboardToCreate;
                {
                    this.#log(`📊 Creating dashboard on Grafana: ${title} in folder vid: ${folderVid}`);
                    const response = await grafanaApi.createDashboard(
                        content,
                        folderVid,
                        `Autogenerated dashboard for project: ${projectName}, dashboard: ${title}`
                    );
                    this.#log(`👌 Dashboard created: ${JSON.stringify(response)}`);
                }
            }
        }
        return this;
    }
}
