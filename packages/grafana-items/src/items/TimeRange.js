import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const TimeRange = defineGrafanaItemClass('TimeRange', GrafanaItem)
    .defineValue('from', String)
    .defineValue('to', String)
    .defineMethod('setRange', '(from: string, to: string): this;', {
        /**
         * @param {TimeRange} timeRange 
         * @param {string} from 
         * @param {string} to 
         * @returns {TimeRange}
         */
        code: (timeRange, from, to) => {
            timeRange.setFrom(from);
            timeRange.setTo(to);
            return timeRange;
        }
    })
    .asClass
