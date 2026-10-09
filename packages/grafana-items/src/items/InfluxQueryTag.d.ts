import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class InfluxQueryTag extends GrafanaItem {
    get key(): String;
    setKey(key: String): this;
    get operator(): String;
    setOperator(operator: String): this;
    get value(): String;
    setValue(value: String): this;
}
