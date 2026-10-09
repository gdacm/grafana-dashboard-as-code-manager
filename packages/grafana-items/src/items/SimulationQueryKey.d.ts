import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class SimulationQueryKey extends GrafanaItem {
    get tick(): Number;
    setTick(tick: Number): this;
    get type(): String;
    setType(type: String): this;
    get uid(): String;
    setUid(uid: String): this;
}
