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
    const { projectName, projectRootVid, projectRootGrafanaFolder, projectVidPrefix } = info;
    const dashboardManager = new DashboardManager();
    if (!projectName || !projectRootVid || !projectRootGrafanaFolder) {
        throw new Error(`Missing projectName or projectRootVid or projectRootGrafanaFolder in info`);
    }
    dashboardManager.setupProject(projectName, projectRootVid, projectRootGrafanaFolder, projectVidPrefix, { info });
    dashboardManager.registerDashboards(
        projectName,
        new DashboardsInfo(
            dashboardsInfos
        )
    );

    await dashboardManager.generateDashboards(projectName, `${outDir}/${projectRootVid}`);
}
