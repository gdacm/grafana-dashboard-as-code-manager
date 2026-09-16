import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TemplateOption extends GrafanaItem {
    get selected(): Boolean;
    setSelected(selected: Boolean): this;
    get text(): String;
    setText(text: String): this;
    get value(): String;
    setValue(value: String): this;
}
