import { DashboardInfo } from "@gdacm/core";
import { UqlQueryBuilder } from "@gdacm/querybuilder-uql";
import { GrafanaItem } from "@gdacm/core";
import type { GenericOptions, DashboardMetaOptions } from "@gdacm/core";

const airportsQuery = new UqlQueryBuilder()
    .parseJson()
    .scope('airports')
    .asString()

type LocalOptions = {
    datasource: GrafanaItem,
}

const getPanel = (options: LocalOptions & GenericOptions): GrafanaItem => {
    const { datasource } = options;

    return new GrafanaItem(options)
        ._setObject("datasource", datasource)
        ._setObject("gridPos", { x: 0, y: 0, w: 24, h: 16 })
        ._setValue("title", "Airports")
        ._addArrayItem("targets",
            new GrafanaItem(options)
                ._setValue("datasource", datasource)
                ._setValue("refId", 'A')
                ._setObject("columns", [
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
                ._setObject("computed_columns", [])
                ._setValue("parser", 'backend')
                ._setValue("uql", airportsQuery)
                ._setValue("type", 'uql')
                ._setValue("source", 'url')
                ._setValue("url", 'https://jsonlint.com/datasets/airports.json')
                ._setObject("url_options", {
                    "data": "",
                    "method": "GET",
                })
                ._setValue("format", 'table')
        )
        ._setObject("options",
            new GrafanaItem(options)
                ._setObject("basemap",
                    new GrafanaItem(options)
                        ._setObject("config", {})
                        ._setValue("name", 'Background map')
                        ._setValue("noRepeat", false)
                        ._setValue("type", 'default')
                )
                ._setObject("controls",
                    new GrafanaItem(options)
                        ._setValue("mouseWheelZoom", true)
                        ._setValue("showAttribution", true)
                        ._setValue("showDebug", false)
                        ._setValue("showMeasure", false)
                        ._setValue("showScale", false)
                        ._setValue("showZoom", true)
                )
                ._setObject("tooltip",
                    new GrafanaItem(options)
                        ._setValue("mode", 'details')
                )
                ._setObject("view",
                    new GrafanaItem(options)
                        ._setValue("allLayers", true)
                        ._setValue("id", 'coords')
                        ._setValue("lat", 48.719935)
                        ._setValue("lon", 1.539864)
                        ._setValue("noRepeat", false)
                        ._setValue("shared", false)
                        ._setValue("zoom", 4.57)
                )
                ._addArrayItem("layers",
                    new GrafanaItem(options)
                        ._setObject("config",
                            new GrafanaItem(options)
                                ._setValue("showLegend", true)
                                ._setObject("style",
                                    new GrafanaItem(options)
                                        ._setObject("color",
                                            new GrafanaItem(options)
                                                ._setValue("fixed", 'red')
                                        )
                                        ._setValue("opacity", 0.8)
                                        ._setObject("rotation",
                                            new GrafanaItem(options)
                                                ._setValue("fixed", 0)
                                                ._setValue("max", 360)
                                                ._setValue("min", -360)
                                                ._setValue("mode", 'mod')
                                        )
                                        ._setObject("size",
                                            new GrafanaItem(options)
                                                ._setValue("fixed", 8)
                                                ._setValue("max", 15)
                                                ._setValue("min", 2)
                                        )
                                        ._setObject("symbol",
                                            new GrafanaItem(options)
                                                ._setValue("fixed", 'img/icons/marker/plane.svg')
                                                ._setValue("mode", 'fixed')
                                        )
                                        ._setObject("symbolAlign",
                                            new GrafanaItem(options)
                                                ._setValue("horizontal", 'center')
                                                ._setValue("vertical", 'center')
                                        )
                                        ._setObject("textConfig",
                                            new GrafanaItem(options)
                                                ._setValue("fontSize", 12)
                                                ._setValue("offsetX", 0)
                                                ._setValue("offsetY", 0)
                                                ._setValue("textAlign", 'center')
                                                ._setValue("textBaseline", 'middle')
                                        )
                                )
                        )
                        ._setObject("location",
                            new GrafanaItem(options)
                                ._setValue("mode", 'auto')
                        )
                        ._setValue("name", 'Grut')
                        ._setValue("tooltip", true)
                        ._setValue("type", 'markers')
                )
        )
        ._setValue("type", 'geomap')
}

const getDashboard = async (uid: string, metaOptions: DashboardMetaOptions): Promise<GrafanaItem> => {
    const { title, tags } = metaOptions;
    const { jsonDsUid } = metaOptions?.info || {};

    if (!jsonDsUid) {
        throw new Error('Missing required options: jsonDsUid');
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
        ._addArrayItem("panels", getPanel({ ...metaOptions, datasource }))
}

export default new DashboardInfo()
    .setSid('airports')
    .setTitle('Airports')
    .setTags(['sample', 'airports'])
    .setDashboardGenerator(getDashboard)
