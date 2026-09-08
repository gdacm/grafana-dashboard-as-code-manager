import { DashboardInfo } from "@gdacm/dashboard-manager";
import { UqlQueryBuilder } from "@gdacm/querybuilder-uql";
import {
    Dashboard,
    Datasource,
    TargetInfinity,
    Stat,
    DatasourceInfinity,
} from "@gdacm/grafana-items";

const currencyQuery = (currency) => new UqlQueryBuilder()
    .parseJson()
    .scope('rates')
    .project([currency])
    .asString()

const getPanel = (options) => {
    const { currencyFrom, currencyDashboard, datasource, index, currencyUrlPrefix } = options;

    return new Stat(options)
        .setDatasource(datasource)
        .setPos(4 * index, 0, 4, 3)
        .setTitle(`Rate ${currencyFrom} to ${currencyDashboard}`)
        .addTarget(
            new TargetInfinity(options)
                .setDatasource(datasource)
                .setRefId('A')
                .setColumns([])
                .setComputedColumns([])
                .setParser('backend')
                .setUql(currencyQuery(currencyFrom))
                .setType('uql')
                .setSource('url')
                .setUrl(`${currencyUrlPrefix}${currencyDashboard}`)
                .setUrlOptions({
                    "data": "",
                    "method": "GET",
                })
        )
}

const getGetDashboard = (currencyDashboard) => async (uid, metaOptions) => {
    const { title, tags } = metaOptions;
    const { jsonDsUid, ratesCurrencies, currencyUrlPrefix } = metaOptions?.info || {};
    
    if (!ratesCurrencies || !Object.keys(ratesCurrencies).length || !jsonDsUid || !currencyUrlPrefix) {
        throw new Error('Missing required options: ratesCurrencies, jsonDsUid, or currencyUrlPrefix');
    }

    const datasource = new DatasourceInfinity(metaOptions)
        .setUid(jsonDsUid);

    return new Dashboard(metaOptions)
        .setUid(uid)
        .setTitle(title)
        .setTags(tags)
        .setTimeRange("now-1M", "now+2m")
        .setPreload(false)
        .with(
            dashboard => Object.keys(ratesCurrencies)
                .filter(currency => currency !== currencyDashboard)
                .map(
                    (currencyFrom, index) => getPanel(
                        { ...metaOptions, datasource, index, currencyFrom, currencyDashboard, currencyUrlPrefix }
                    )
                )
                .forEach((panel) => dashboard.addPanel(panel))
        )
}

export default (info) => {
    const { ratesCurrencies } = info;
    if (!ratesCurrencies) {
        throw new Error('ratesCurrencies is not defined in info');
    }
    return Object.keys(ratesCurrencies)
        .map((currency) => new DashboardInfo()
            .setSid(`rate-${currency}`)
            .setTitle(`rate ${currency} (${ratesCurrencies[currency]})`)
            .setTags(['sample', 'rates'])
            .setDashboardGenerator(getGetDashboard(currency))
        )
}
