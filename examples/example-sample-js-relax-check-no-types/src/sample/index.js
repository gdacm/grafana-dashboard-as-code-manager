import { FolderInfo, DashboardsInfo } from "@gdacm/dashboard-manager";
import dashboardInfosAirports from './airports.js';
import dashboardInfosGareRoutiereBercy from './gare-routiere-bercy.js';

const folderInfo = new FolderInfo()
    .setName('Sample')
    .setEmoji('🥦')
    .setSid('sample')

export default new DashboardsInfo(dashboardInfosAirports, dashboardInfosGareRoutiereBercy).setPath([folderInfo])
