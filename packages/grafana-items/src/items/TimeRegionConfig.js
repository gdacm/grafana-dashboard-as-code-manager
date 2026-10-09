import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const TimeRegionConfig = defineGrafanaItemClass('TimeRegionConfig', GrafanaItem)
    .defineValue('cronExpr', String)
    .defineValue('duration', String)
    .defineValue('from', String)
    .defineValue('fromDayOfWeek', Number)
    .defineValue('mode', String) // TODO null | "cron"
    .defineValue('timezone', String)
    .defineValue('to', String)
    .defineValue('toDayOfWeek', Number)
    .asClass
