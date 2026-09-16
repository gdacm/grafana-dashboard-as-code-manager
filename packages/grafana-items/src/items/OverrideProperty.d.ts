import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class OverrideProperty extends GrafanaItem {
    get id(): String;
    setId(id: String): this;
    get value(): Object;
    setValue(value: Object): this;
}
