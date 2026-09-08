import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";


export const TimePicker = defineGrafanaItemClass('TimePicker', GrafanaItem)
    .defineArray('refresh_intervals', String, { itemName: 'refreshInterval' })
    .asClass
