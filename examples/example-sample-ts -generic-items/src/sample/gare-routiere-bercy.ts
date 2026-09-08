import { DashboardInfo } from "@gdacm/dashboard-manager";
import { UqlQueryBuilder } from "@gdacm/querybuilder-uql";
import { GrafanaItem } from "@gdacm/grafana-items";

import type { DashboardOptions, GenericOptions, MetaOptions } from "@gdacm/base-types";

const url = "https://autogare-bercy.passautocar.paris.fr/public/screens/5baa6b56-f7e3-495e-b584-1d489fc54f47"
const gareRoutiereBercyQuery = new UqlQueryBuilder()
    .parseJson()
    .scope('schedules')
    .extend('Quai', '"bus.spot.number"')
    .extend('Départ effectif', '"expectedDeparture"')
    .extend('Départ prévu', '"initialDeparture"')
    .extend('Nom', '"line.name"')
    .extend('Numéro', '"line.number"')
    .extend('Délai', '"delay"')
    .extend('Statut', '"status"')
    .project(['Quai', 'Départ effectif', 'Délai', 'Départ prévu', 'Nom', 'Statut', 'Numéro'])
    .orderBy([{ name: 'Départ prévu', direction: 'asc' }, { name: 'Nom', direction: 'asc' }])
    .asString()

const getPanel = (options: { datasource: GrafanaItem } & GenericOptions): GrafanaItem => {
    const { datasource } = options;

    return new GrafanaItem(options)
        ._setValue("datasource", options.datasource)
        ._setValue("gridPos", { x: 0, y: 0, w: 24, h: 22 })
        ._addArrayItem("targets",
            new GrafanaItem(options)
                ._setValue("datasource", datasource)
                ._setValue("refId", 'A')
                ._setObject("columns", [])
                ._setObject("computed_columns", [])
                ._setValue("parser", 'backend')
                ._setValue("uql", gareRoutiereBercyQuery)
                ._setValue("type", 'uql')
                ._setValue("source", 'url')
                ._setValue("url", url)
                ._setObject("url_options", {
                    "data": "",
                    "method": "POST",
                })
                ._setValue("title", "")
                ._setValue("format", 'table')
        )
        ._setObject("options",
            new GrafanaItem(options)
                ._setValue("cellHeight", 'sm')
                ._setValue("showHeader", true)
                ._addArrayItem("sortBy",
                    new GrafanaItem(options)
                        ._setValue("desc", false)
                        ._setValue("displayName", 'Départ prévu')
                )
        )
        ._setValue("type", 'table')
}

const getDashboard = async (uid: string, metaOptions: MetaOptions<DashboardOptions>): Promise<GrafanaItem> => {
    const { title, tags } = metaOptions;
    const { jsonDsUid } = metaOptions?.info || {};

    if (!jsonDsUid) {
        throw new Error('JSON datasource UID is required');
    }

    const datasource = new GrafanaItem(metaOptions)
        ._setValue("uid", jsonDsUid)
        ._setValue("type", 'yesoreyeram-infinity-datasource')

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
        ._addArrayItem("panels", getPanel({ ...metaOptions, datasource }));
}

export default new DashboardInfo()
    .setSid('gare-routiere-bercy')
    .setTitle('Gare Routiere Bercy')
    .setTags(['sample', 'gare-routiere-bercy'])
    .setDashboardGenerator(getDashboard)
