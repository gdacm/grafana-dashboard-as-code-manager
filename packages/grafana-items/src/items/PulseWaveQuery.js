import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const PulseWaveQuery = defineGrafanaItemClass('PulseWaveQuery', GrafanaItem)
    .defineValue('offCount', Number)
    .defineValue('offValue', Number)
    .defineValue('onCount', Number)
    .defineValue('onValue', Number)
    .defineValue('timeStep', Number)
    .asClass
