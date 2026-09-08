import { GrafanaItem } from "./GrafanaItem.js";
import { TemplateCurrent } from "./TemplateCurrent.js";
import { TemplateOption } from "./TemplateOption.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Template extends GrafanaItem {
    setCurrent(current: TemplateCurrent): this;
    setNewCurrent(onNewCreated: ((item: TemplateCurrent) => TemplateCurrent) | undefined): this;
    withCurrent(onWith: (item: TemplateCurrent) => void): this;
    get current(): TemplateCurrent;
    setDefinition(definition: String): this;
    setDescription(description: String): this;
    setHide(hide: Number): this;
    setLabel(label: String): this;
    setMulti(multi: Boolean): this;
    setName(name: String): this;
    initOptions(): this;
    get options(): TemplateOption[];
    addOption(option: TemplateOption): this;
    addNewOption(onNewCreated: (item: TemplateOption) => TemplateOption): this;
    withOptions(onWith: (options: TemplateOption[]) => void): this;
    setQuery(query: Object): this;
    setRefresh(refresh: Number): this;
    setRegex(regex: String): this;
    setSort(sort: Number): this;
    setType(type: String): this;
    setUseTags(useTags: Boolean): this;
}
