import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class SimulationQuery extends GrafanaItem {
    setConfig(config: Object): this;
    withConfig(onWith: (item: Object) => void): this;
    get config(): Object;
    setKey(key: Object): this;
    withKey(onWith: (item: Object) => void): this;
    get key(): Object;
    get last(): Boolean;
    setLast(last: Boolean): this;
    get stream(): Boolean;
    setStream(stream: Boolean): this;
}
