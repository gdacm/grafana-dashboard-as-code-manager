import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class UsaQuery extends GrafanaItem {
    initFields(): this;
    get fields(): String[];
    addField(field: String): this;
    addNewField(onNewCreated: (item: String) => String): this;
    withFields(onWith: (fields: String[]) => void): this;
    get mode(): String;
    setMode(mode: String): this;
    get period(): String;
    setPeriod(period: String): this;
    initStates(): this;
    get states(): String[];
    addState(state: String): this;
    addNewState(onNewCreated: (item: String) => String): this;
    withStates(onWith: (states: String[]) => void): this;
}
