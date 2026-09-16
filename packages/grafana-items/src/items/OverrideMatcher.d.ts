import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class OverrideMatcher extends GrafanaItem {
    get id(): String;
    setId(id: String): this;
    setOptions(options: Object): this;
    withOptions(onWith: (item: Object) => void): this;
    get options(): Object;
}
