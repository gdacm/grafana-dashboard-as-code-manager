import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class ThresholdsStep extends GrafanaItem {
    get value(): Number;
    setValue(value: Number): this;
    get color(): String;
    setColor(color: String): this;
}
