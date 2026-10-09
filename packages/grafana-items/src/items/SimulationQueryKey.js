import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const SimulationQueryKey = defineGrafanaItemClass('SimulationQueryKey', GrafanaItem)
    .defineValue('tick', Number)
    .defineValue('type', String)
    .defineValue('uid', String)
    .asClass
