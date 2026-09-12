import { createDashboards } from '@gdacm/core';
import dashboardsInfo from './src/index.js';
import infoCode from './src/res/info.js';

const main = async () => {
    await createDashboards(['./../../local', './local'], './out', infoCode, dashboardsInfo);
}

main().catch(console.error);