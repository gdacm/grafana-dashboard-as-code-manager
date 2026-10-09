import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

/*
config	Record<string, any>	—	SimulationQuery
key	objet	—	SimulationQuery
last	boolean	—	SimulationQuery
stream	boolean	—	SimulationQuery
*/

export const SimulationQuery = defineGrafanaItemClass('SimulationQuery', GrafanaItem)
    .defineBasicObject('config', Object)
    .defineBasicObject('key', Object)
    .defineValue('last', Boolean)
    .defineValue('stream', Boolean)
    .asClass
