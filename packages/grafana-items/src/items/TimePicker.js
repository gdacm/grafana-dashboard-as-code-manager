import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";


export const TimePicker = defineGrafanaItemClass('TimePicker', GrafanaItem)
    .defineBasicArray('refresh_intervals', String, { itemName: 'refreshInterval' })
    .asClass
