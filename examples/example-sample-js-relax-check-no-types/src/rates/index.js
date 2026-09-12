import { FolderInfo, DashboardsInfo } from "@gdacm/core";
import dashboardInfosCurrency from './currency.js';

const folderInfo = new FolderInfo()
    .setName('Rates')
    .setEmoji('💱')
    .setSid('rates')

export default new DashboardsInfo(dashboardInfosCurrency).setPath([folderInfo])
