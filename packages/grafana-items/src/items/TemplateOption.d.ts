import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TemplateOption extends GrafanaItem {
    setSelected(selected: Boolean): this;
    setText(text: String): this;
    setValue(value: String): this;
}
