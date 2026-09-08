import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Datasource extends GrafanaItem {
    setType(type: String): this;
    setUid(uid: String): this;
}
