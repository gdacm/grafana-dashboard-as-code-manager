import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class VizTextDisplayOptions extends GrafanaItem {
    get percentSize(): Number;
    setPercentSize(percentSize: Number): this;
    get titleSize(): Number;
    setTitleSize(titleSize: Number): this;
    get valueSize(): Number;
    setValueSize(valueSize: Number): this;
}
