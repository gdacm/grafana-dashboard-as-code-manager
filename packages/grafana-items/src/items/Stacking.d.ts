import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Stacking extends GrafanaItem {
    get group(): String;
    setGroup(group: String): this;
    get mode(): String;
    setMode(mode: String): this;
}
