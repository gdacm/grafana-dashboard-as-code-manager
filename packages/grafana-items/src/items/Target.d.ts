import { GrafanaItem } from "./GrafanaItem.js";
import { Datasource } from "./Datasource.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Target extends GrafanaItem {
    get alias(): String;
    setAlias(alias: String): this;
    get refId(): String;
    setRefId(refId: String): this;
    get query(): String;
    setQuery(query: String): this;
    setDatasource(datasource: Datasource): this;
    setNewDatasource(onNewCreated: ((item: Datasource) => Datasource) | undefined): this;
    withDatasource(onWith: (item: Datasource) => void): this;
    get datasource(): Datasource;
    get seriesCount(): Number;
    setSeriesCount(seriesCount: Number): this;
    get scenarioId(): String;
    setScenarioId(scenarioId: String): this;
    get stringInput(): String;
    setStringInput(stringInput: String): this;
}
