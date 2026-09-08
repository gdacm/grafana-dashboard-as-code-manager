import { GrafanaItem } from "./GrafanaItem.js";
import { Datasource } from "./Datasource.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Target extends GrafanaItem {
    setAlias(alias: String): this;
    setRefId(refId: String): this;
    setQuery(query: String): this;
    setDatasource(datasource: Datasource): this;
    setNewDatasource(onNewCreated: ((item: Datasource) => Datasource) | undefined): this;
    withDatasource(onWith: (item: Datasource) => void): this;
    get datasource(): Datasource;
    setSeriesCount(seriesCount: Number): this;
    setScenarioId(scenarioId: String): this;
    setStringInput(stringInput: String): this;
}
