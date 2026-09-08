import { DashboardInfo } from "@gdacm/dashboard-manager";
import { UqlQueryBuilder } from "@gdacm/querybuilder-uql";
import {
    Dashboard,
    Datasource,
    Geomap,
    TargetInfinity,
    DatasourceInfinity,
} from "@gdacm/grafana-items";

const airportsQuery = new UqlQueryBuilder()
    .parseJson()
    .scope('airports')
    .asString()

const getPanel = (options) => {
    const { datasource } = options;

    return new Geomap(options)
        .setDatasource(datasource)
        .setPos(0, 0, 24, 16)
        .setTitle('Airports')

        .addTarget(
            new TargetInfinity(options)
                .setDatasource(datasource)
                .setRefId('A')
                .setColumns([
                    {
                        "selector": "airports.*.city",
                        "text": "City",
                        "type": "string"
                    },
                    {
                        "selector": "airports.*.code",
                        "text": "Code",
                        "type": "string"
                    },
                    {
                        "selector": "airports.*.lat",
                        "text": "Lat",
                        "type": "number"
                    },
                    {
                        "selector": "airports.*.lon",
                        "text": "Lon",
                        "type": "number"
                    },
                    {
                        "selector": "airports.*.name",
                        "text": "Name",
                        "type": "string"
                    }
                ])
                .setComputedColumns([])
                .setParser('backend')
                .setUql(airportsQuery)
                .setType('uql')
                .setSource('url')
                .setUrl('https://jsonlint.com/datasets/airports.json')
                .setUrlOptions({
                    "data": "",
                    "method": "GET",
                })
                .setFormat('table')
        )
        .withOptions(
            item => item
                .setNewBasemap(
                    basemap => basemap
                        .setConfig({})
                        .setName('Background map')
                        .setNoRepeat(false)
                        .setType('default')
                )
                .setNewControls(
                    controls => controls
                        .setMouseWheelZoom(true)
                        .setShowAttribution(true)
                        .setShowDebug(false)
                        .setShowMeasure(false)
                        .setShowScale(false)
                        .setShowZoom(true)
                )
                .setNewTooltip(
                    tooltip => tooltip
                        .setMode('details')
                )
                .setNewView(
                    view => view
                        .setAllLayers(true)
                        .setId('coords')
                        .setLat(48.719935)
                        .setLon(1.539864)
                        .setNoRepeat(false)
                        .setShared(false)
                        .setZoom(4.57)
                )
                .addNewLayer(
                    layer => layer
                        .setNewConfig(
                            config => config
                                .setShowLegend(true)
                                .setNewStyle(
                                    style => style
                                        .withColor((color) => color.setFixed('red'))
                                        .setOpacity(0.8)
                                        .withRotation(
                                            rotation => rotation
                                                .setFixed(0)
                                                .setMax(360)
                                                .setMin(-360)
                                                .setMode('mod')
                                        )
                                        .withSize(
                                            size => size
                                                .setFixed(8)
                                                .setMax(15)
                                                .setMin(2)
                                        )
                                        .withSymbol(
                                            symbol => symbol
                                                .setFixed('img/icons/marker/plane.svg')
                                                .setMode('fixed')
                                        )
                                        .withSymbolAlign(
                                            symbolAlign => symbolAlign
                                                .setHorizontal('center')
                                                .setVertical('center')
                                        )
                                        .withTextConfig(
                                            textConfig => textConfig
                                                .setFontSize(12)
                                                .setOffsetX(0)
                                                .setOffsetY(0)
                                                .setTextAlign('center')
                                                .setTextBaseline('middle')
                                        )
                                )
                        )
                        .setNewLocation(
                            location => location
                                .setMode('auto')
                        )
                        .setName('Grut')
                        .setTooltip(true)
                        .setType('markers')
                )
        )
}

const getDashboard = async (uid, metaOptions) => {
    const { title, tags } = metaOptions;
    const { jsonDsUid } = metaOptions?.info || {};

    if (!jsonDsUid) {
        throw new Error('Missing required options: jsonDsUid');
    }

    const datasource = new DatasourceInfinity(metaOptions)
        .setUid(jsonDsUid);

    return new Dashboard(metaOptions)
        .setUid(uid)
        .setTitle(title)
        .setTags(tags)
        .setTimeRange("now-1M", "now+2m")
        .setPreload(false)
        .addPanel(getPanel({ ...metaOptions,  datasource }))
}

export default new DashboardInfo()
    .setSid('airports')
    .setTitle('Airports')
    .setTags(['sample', 'airports'])
    .setDashboardGenerator(getDashboard)
