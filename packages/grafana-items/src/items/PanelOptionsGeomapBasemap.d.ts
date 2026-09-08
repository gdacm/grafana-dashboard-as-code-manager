import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapBasemap extends GrafanaItem {
    setConfig(config: Object): this;
    setNewConfig(onNewCreated: ((item: Object) => Object) | undefined): this;
    withConfig(onWith: (item: Object) => void): this;
    get config(): Object;
    setName(name: String): this;
    setNoRepeat(noRepeat: Boolean): this;
    setType(type: String): this;
}
