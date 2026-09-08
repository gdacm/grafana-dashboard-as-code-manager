import { DashboardsInfo } from '@gdacm/dashboard-manager';
import dashboardsInfoSample from './sample/index.js';
import dashboardsInfoRates from './rates/index.js';

export default new DashboardsInfo(
    dashboardsInfoSample,
    dashboardsInfoRates,
)