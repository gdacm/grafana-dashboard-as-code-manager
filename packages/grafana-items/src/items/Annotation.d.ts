import { GrafanaItem } from "./GrafanaItem.js";
import { Datasource } from "./Datasource.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Annotation extends GrafanaItem {
    get builtIn(): Number;
    setBuiltIn(builtIn: Number): this;
    setDatasource(datasource: Datasource): this;
    setNewDatasource(onNewCreated: ((item: Datasource) => Datasource) | undefined): this;
    withDatasource(onWith: (item: Datasource) => void): this;
    get datasource(): Datasource;
    get enable(): Boolean;
    setEnable(enable: Boolean): this;
    get hide(): Boolean;
    setHide(hide: Boolean): this;
    get iconColor(): String;
    setIconColor(iconColor: String): this;
    get name(): String;
    setName(name: String): this;
    get type(): String;
    setType(type: String): this;
}
