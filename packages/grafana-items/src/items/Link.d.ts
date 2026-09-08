import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Link extends GrafanaItem {
    constructor(metaOptions: GenericMetaOptions)
    setAsDropdown(asDropdown: Boolean): this;
    setIcon(icon: String): this;
    setIncludeVars(includeVars: Boolean): this;
    setKeepTime(keepTime: Boolean): this;
    initTags(): this;
    get tags(): String[];
    addTag(tag: String): this;
    addNewTag(onNewCreated: (item: String) => String): this;
    withTags(onWith: (tags: String[]) => void): this;
    setTargetBlank(targetBlank: Boolean): this;
    setTitle(title: String): this;
    setTooltip(tooltip: String): this;
    setType(type: String): this;
    setUrl(url: String): this;
}
