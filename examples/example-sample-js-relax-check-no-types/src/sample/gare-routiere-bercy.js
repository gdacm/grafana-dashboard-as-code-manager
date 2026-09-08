import { DashboardInfo } from "@gdacm/dashboard-manager";
import { UqlQueryBuilder } from "@gdacm/querybuilder-uql";
import {
    Dashboard,
    TargetInfinity,
    Table,
    DatasourceInfinity,
} from "@gdacm/grafana-items";

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

const getPanel = (options) => {
    const { datasource } = options;

    return new Table(options)
        .setDatasource(datasource)
        .setPos(0, 0, 24, 22)
        .addTarget(
            new TargetInfinity(options)
                .setDatasource(datasource)
                .setRefId('A')
                .setColumns([])
                .setComputedColumns([])
                .setParser('backend')
                .setUql(gareRoutiereBercyQuery)
                .setType('uql')
                .setSource('url')
                .setUrl(url)
                .setUrlOptions({
                    "data": "",
                    "method": "POST",
                })
                .setFormat('table')
        )
        .setNewOptions(
            (options) => options
                .setCellHeight('sm')
                .setShowHeader(true)
                .addNewSortByItem(
                    (sortBy) => sortBy
                        .setDesc(false)
                        .setDisplayName('Départ prévu')
                )
        )
}

const getDashboard = async (uid, metaOptions) => {
    const { title, tags } = metaOptions;
    const { jsonDsUid } = metaOptions?.info || {};

    if (!jsonDsUid) {
        throw new Error('JSON datasource UID is required');
    }

    const datasource = new DatasourceInfinity(metaOptions)
        .setUid(jsonDsUid);

    return new Dashboard(metaOptions)
        .setUid(uid)
        .setTitle(title)
        .setTags(tags)
        .setTimeRange("now-1M", "now+2m")
        .setPreload(false)
        .addPanel(getPanel({ ...metaOptions, datasource }));
}

export default new DashboardInfo()
    .setSid('gare-routiere-bercy')
    .setTitle('Gare Routiere Bercy')
    .setTags(['sample', 'gare-routiere-bercy'])
    .setDashboardGenerator(getDashboard)
