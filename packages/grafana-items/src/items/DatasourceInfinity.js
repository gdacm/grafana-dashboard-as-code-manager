import { Datasource } from "./Datasource.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { defineDatasource } from "./properties/datasource.js";

export const DatasourceInfinity = defineGrafanaItemClass('DatasourceInfinity', Datasource)
    .with(builder => defineDatasource(builder, 'yesoreyeram-infinity-datasource'))
    .asClass
