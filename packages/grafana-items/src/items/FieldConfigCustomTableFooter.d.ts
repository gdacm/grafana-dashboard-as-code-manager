import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigCustomTableFooter extends GrafanaItem {
    initReducers(): this;
    get reducers(): String[];
    addReducer(reducer: String): this;
    addNewReducer(onNewCreated: (item: String) => String): this;
    withReducers(onWith: (reducers: String[]) => void): this;
}
