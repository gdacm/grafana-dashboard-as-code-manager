import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleTextConfig extends GrafanaItem {
    setFontSize(fontSize: Number): this;
    setOffsetX(offsetX: Number): this;
    setOffsetY(offsetY: Number): this;
    setTextAlign(textAlign: String): this;
    setTextBaseline(textBaseline: String): this;
}
