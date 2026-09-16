import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TimeRange extends GrafanaItem {
    get from(): String;
    setFrom(from: String): this;
    get to(): String;
    setTo(to: String): this;
    setRange(from: string, to: string): this;
}
