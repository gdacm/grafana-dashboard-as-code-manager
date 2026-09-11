import { DashboardManager, DashboardsInfo } from "./index.js";
import { getInfo } from "./info.js";

/**
 * @typedef {import("@gdacm/base-types").Info} Info
 */

/**
 * @param {string[]} localFolders 
 * @param {string} outDir
 * @param {Info|Info[]} infosCode
 * @param {DashboardsInfo} dashboardsInfos
 * @returns {Promise<void>}
 */
export const createDashboards = async (localFolders, outDir, infosCode, dashboardsInfos) => {
    const info = await getInfo(infosCode, localFolders);
    let { projectName, projectRootVid, projectRootGrafanaFolder, projectVidPrefix } = info;
    const dashboardManager = new DashboardManager();
    if (!projectRootVid && projectVidPrefix) {
        projectRootVid = projectVidPrefix;
    }
    if (!projectVidPrefix && projectRootVid) {
        projectVidPrefix = projectRootVid;
    }
    if (!projectRootGrafanaFolder || !projectRootVid) {
        throw new Error(`Missing projectRootGrafanaFolder or projectRootVid in info`);
    }
    if (!projectName) {
        projectName = projectRootVid;
    }
    dashboardManager.setupProject(projectName, projectRootVid, projectRootGrafanaFolder, projectVidPrefix, { info });
    dashboardManager.registerDashboards(
        projectName,
        new DashboardsInfo(
            dashboardsInfos
        )
    );

    await dashboardManager.generateDashboards(projectName, `${outDir}/${projectVidPrefix}`);
}
