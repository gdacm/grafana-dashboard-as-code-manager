import { createDashboards } from '@gdacm/dashboard-manager';
import dashboardsInfo from './src';
import infoCode from './src/res/info';

const main = async () => {
    await createDashboards(['./../../local', './local'], './out', infoCode, dashboardsInfo);
}

main().catch(console.error);
