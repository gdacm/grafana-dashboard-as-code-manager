import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TimeRange extends GrafanaItem {
    setFrom(from: String): this;
    setTo(to: String): this;
    setRange(from: string, to: string): this;
}
