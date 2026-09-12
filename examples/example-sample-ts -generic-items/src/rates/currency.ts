import { DashboardInfo } from "@gdacm/dashboard-manager";
import { UqlQueryBuilder } from "@gdacm/querybuilder-uql";
import { GrafanaItem } from "@gdacm/grafana-items";
import type { Info, DashboardMetaOptions, GenericOptions } from "@gdacm/base-types";

const currencyQuery = (currency: string): string => new UqlQueryBuilder()
    .parseJson()
    .scope('rates')
    .project([currency])
    .asString()

type LocalOptions = {
    datasource: GrafanaItem,
    currencyDashboard: string,
    currencyFrom: string,
    index: number,
    currencyUrlPrefix: string,
}

const getPanel = (options: LocalOptions & GenericOptions): GrafanaItem => {
    const { currencyFrom, currencyDashboard, datasource, index, currencyUrlPrefix } = options;

    return new GrafanaItem(options)
        ._setObject("datasource", datasource)
        ._setObject("gridPos", { x: 4 * index, y: 0, w: 4, h: 3 })
        ._setValue("title", `Rate ${currencyFrom} to ${currencyDashboard}`)
        ._setObject("fieldConfig",
            new GrafanaItem(options)
                ._setObject("defaults",
                    new GrafanaItem(options)
                        ._setObject("color",
                            new GrafanaItem(options)
                                ._setValue("mode", "palette-classic")
                        )
                        ._setObject("thresholds",
                            new GrafanaItem(options)
                                ._setObject("mode", "absolute")
                        )
                )
        )
        ._setObject("targets", [
            new GrafanaItem(options)
                ._setObject("datasource", datasource)
                ._setValue("refId", 'A')
                ._setObject("columns", [])
                ._setObject("computed_columns", [])
                ._setValue("parser", 'backend')
                ._setValue("uql", currencyQuery(currencyFrom))
                ._setValue("type", 'uql')
                ._setValue("source", 'url')
                ._setValue("url", `${currencyUrlPrefix}${currencyDashboard}`)
                ._setObject("url_options", {
                    "data": "",
                    "method": "GET",
                })
        ])
        ._setValue('type', 'stat')
}

const getGetDashboard = (currencyDashboard: string) => async (uid: string, metaOptions: DashboardMetaOptions): Promise<GrafanaItem> => {
    const { title, tags } = metaOptions;
    const { jsonDsUid, ratesCurrencies, currencyUrlPrefix } = metaOptions?.info || {};

    if (!ratesCurrencies || !Object.keys(ratesCurrencies).length || !jsonDsUid || !currencyUrlPrefix) {
        throw new Error('Missing required options: ratesCurrencies, jsonDsUid, or currencyUrlPrefix');
    }

    const datasource = new GrafanaItem(metaOptions)
        ._setValue("type", "yesoreyeram-infinity-datasource")
        ._setValue("uid", jsonDsUid)

    return new GrafanaItem(metaOptions)
        ._setValue("uid", uid)
        ._setValue("title", title)
        ._setObject("tags", tags)
        ._setObject("time",
            new GrafanaItem(metaOptions)
                ._setObject("from", "now-1M")
                ._setObject("to", "now+2m")
        )
        ._setValue("preload", false)
        .with(
            dashboard => Object.keys(ratesCurrencies)
                .filter(currency => currency !== currencyDashboard)
                .map(
                    (currencyFrom, index) => getPanel(
                        { ...metaOptions, datasource, index, currencyFrom, currencyDashboard, currencyUrlPrefix }
                    )
                )
                .forEach((panel) => dashboard._addArrayItem("panels", panel))
        )
}

export default (info: Info) => {
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
