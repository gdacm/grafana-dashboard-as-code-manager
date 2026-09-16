import { GrafanaItem } from "./GrafanaItem.js";
import { TemplateCurrent } from "./TemplateCurrent.js";
import { TemplateOption } from "./TemplateOption.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Template extends GrafanaItem {
    setCurrent(current: TemplateCurrent): this;
    setNewCurrent(onNewCreated: ((item: TemplateCurrent) => TemplateCurrent) | undefined): this;
    withCurrent(onWith: (item: TemplateCurrent) => void): this;
    get current(): TemplateCurrent;
    get definition(): String;
    setDefinition(definition: String): this;
    get description(): String;
    setDescription(description: String): this;
    get hide(): Number;
    setHide(hide: Number): this;
    get label(): String;
    setLabel(label: String): this;
    get multi(): Boolean;
    setMulti(multi: Boolean): this;
    get name(): String;
    setName(name: String): this;
    initOptions(): this;
    get options(): TemplateOption[];
    addOption(option: TemplateOption): this;
    addNewOption(onNewCreated: (item: TemplateOption) => TemplateOption): this;
    withOptions(onWith: (options: TemplateOption[]) => void): this;
    get query(): Object;
    setQuery(query: Object): this;
    get refresh(): Number;
    setRefresh(refresh: Number): this;
    get regex(): String;
    setRegex(regex: String): this;
    get sort(): Number;
    setSort(sort: Number): this;
    get type(): String;
    setType(type: String): this;
    get useTags(): Boolean;
    setUseTags(useTags: Boolean): this;
}
