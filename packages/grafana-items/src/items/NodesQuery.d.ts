import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class NodesQuery extends GrafanaItem {
    get count(): Number;
    setCount(count: Number): this;
    get seed(): Number;
    setSeed(seed: Number): this;
    get type(): String;
    setType(type: String): this;
}
