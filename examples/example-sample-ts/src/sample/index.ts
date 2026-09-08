import { FolderInfo, DashboardsInfo } from "@gdacm/dashboard-manager";
import dashboardInfosAirports from './airports';
import dashboardInfosGareRoutiereBercy from './gare-routiere-bercy';

const folderInfo = new FolderInfo()
    .setName('Sample')
    .setEmoji('🥦')
    .setSid('sample')

export default new DashboardsInfo(dashboardInfosAirports, dashboardInfosGareRoutiereBercy).setPath([folderInfo])
