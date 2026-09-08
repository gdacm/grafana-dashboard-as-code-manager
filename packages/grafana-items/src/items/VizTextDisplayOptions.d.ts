import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class VizTextDisplayOptions extends GrafanaItem {
    setPercentSize(percentSize: Number): this;
    setTitleSize(titleSize: Number): this;
    setValueSize(valueSize: Number): this;
}
