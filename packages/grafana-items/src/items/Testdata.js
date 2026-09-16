import { Datasource } from "./Datasource.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { defineDatasource } from "./properties/datasource.js";

export const Testdata = defineGrafanaItemClass('Testdata', Datasource)
    .with(builder => defineDatasource(builder, 'grafana-testdata-datasource'))
    .asClass
