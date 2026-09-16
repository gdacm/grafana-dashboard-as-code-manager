import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Datasource extends GrafanaItem {
    get type(): String;
    setType(type: String): this;
    get uid(): String;
    setUid(uid: String): this;
}
