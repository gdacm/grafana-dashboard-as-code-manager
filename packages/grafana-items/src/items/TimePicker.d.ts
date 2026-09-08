import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TimePicker extends GrafanaItem {
    initRefresh_intervals(): this;
    get refresh_intervals(): String[];
    addRefreshInterval(refreshInterval: String): this;
    addNewRefreshInterval(onNewCreated: (item: String) => String): this;
    withRefresh_intervals(onWith: (refresh_intervals: String[]) => void): this;
}
