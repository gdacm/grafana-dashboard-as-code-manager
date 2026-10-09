import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const StreamingQuery = defineGrafanaItemClass('StreamingQuery', GrafanaItem)
    .defineValue('bands', Number)
    .defineValue('noise', Number)
    .defineValue('speed', Number)
    .defineValue('spread', Number)
    .defineValue('type', String) // TODO "fetch" | "logs" | "signal" | "traces"
    .defineValue('url', String)
    .asClass
