import { GrafanaItem } from "./GrafanaItem.js";
import { Datasource } from "./Datasource.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Annotation extends GrafanaItem {
    setBuiltIn(builtIn: Number): this;
    setDatasource(datasource: Datasource): this;
    setNewDatasource(onNewCreated: ((item: Datasource) => Datasource) | undefined): this;
    withDatasource(onWith: (item: Datasource) => void): this;
    get datasource(): Datasource;
    setEnable(enable: Boolean): this;
    setHide(hide: Boolean): this;
    setIconColor(iconColor: String): this;
    setName(name: String): this;
    setType(type: String): this;
}
