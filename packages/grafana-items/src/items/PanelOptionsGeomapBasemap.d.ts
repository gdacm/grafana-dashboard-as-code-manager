import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapBasemap extends GrafanaItem {
    setConfig(config: Object): this;
    withConfig(onWith: (item: Object) => void): this;
    get config(): Object;
    get name(): String;
    setName(name: String): this;
    get noRepeat(): Boolean;
    setNoRepeat(noRepeat: Boolean): this;
    get type(): String;
    setType(type: String): this;
}
