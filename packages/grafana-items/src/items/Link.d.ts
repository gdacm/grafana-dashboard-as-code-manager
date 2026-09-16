import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Link extends GrafanaItem {
    constructor(metaOptions: GenericMetaOptions)
    get asDropdown(): Boolean;
    setAsDropdown(asDropdown: Boolean): this;
    get icon(): String;
    setIcon(icon: String): this;
    get includeVars(): Boolean;
    setIncludeVars(includeVars: Boolean): this;
    get keepTime(): Boolean;
    setKeepTime(keepTime: Boolean): this;
    initTags(): this;
    get tags(): String[];
    addTag(tag: String): this;
    withTags(onWith: (tags: String[]) => void): this;
    get targetBlank(): Boolean;
    setTargetBlank(targetBlank: Boolean): this;
    get title(): String;
    setTitle(title: String): this;
    get tooltip(): String;
    setTooltip(tooltip: String): this;
    get type(): String;
    setType(type: String): this;
    get url(): String;
    setUrl(url: String): this;
}
