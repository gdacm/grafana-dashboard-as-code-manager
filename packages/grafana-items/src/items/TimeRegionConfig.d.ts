import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TimeRegionConfig extends GrafanaItem {
    get cronExpr(): String;
    setCronExpr(cronExpr: String): this;
    get duration(): String;
    setDuration(duration: String): this;
    get from(): String;
    setFrom(from: String): this;
    get fromDayOfWeek(): Number;
    setFromDayOfWeek(fromDayOfWeek: Number): this;
    get mode(): String;
    setMode(mode: String): this;
    get timezone(): String;
    setTimezone(timezone: String): this;
    get to(): String;
    setTo(to: String): this;
    get toDayOfWeek(): Number;
    setToDayOfWeek(toDayOfWeek: Number): this;
}
