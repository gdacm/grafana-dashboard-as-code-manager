import { Datasource } from "./Datasource.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { defineDatasource } from "./properties/datasource.js";

export const Influxdb = defineGrafanaItemClass('Influxdb', Datasource)
    .with(builder => defineDatasource(builder, 'influxdb'))
    .asClass
