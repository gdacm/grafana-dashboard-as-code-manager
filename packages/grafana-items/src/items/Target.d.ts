import { GrafanaItem } from "./GrafanaItem.js";
import { Datasource } from "./Datasource.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Target extends GrafanaItem {
    setDatasource(datasource: Datasource): this;
    setNewDatasource(onNewCreated: ((item: Datasource) => Datasource) | undefined): this;
    withDatasource(onWith: (item: Datasource) => void): this;
    get datasource(): Datasource;
}
