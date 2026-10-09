import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class GrafanaQueryFile extends GrafanaItem {
    get name(): String;
    setName(name: String): this;
    get size(): Number;
    setSize(size: Number): this;
}
