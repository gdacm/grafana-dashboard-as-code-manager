import { GrafanaItem } from "./GrafanaItem.js";
import { Template } from "./Template.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Templating extends GrafanaItem {
    initList(): this;
    get list(): Template[];
    addTemplate(template: Template): this;
    addNewTemplate(onNewCreated: (item: Template) => Template): this;
    withList(onWith: (list: Template[]) => void): this;
}
