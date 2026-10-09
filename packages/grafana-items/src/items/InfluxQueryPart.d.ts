import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class InfluxQueryPart extends GrafanaItem {
    initParams(): this;
    get params(): String[];
    addParam(param: String): this;
    addNewParam(onNewCreated: (item: String) => String): this;
    withParams(onWith: (params: String[]) => void): this;
    get type(): String;
    setType(type: String): this;
}
