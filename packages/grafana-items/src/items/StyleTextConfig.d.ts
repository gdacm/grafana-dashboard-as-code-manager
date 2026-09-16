import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StyleTextConfig extends GrafanaItem {
    get fontSize(): Number;
    setFontSize(fontSize: Number): this;
    get offsetX(): Number;
    setOffsetX(offsetX: Number): this;
    get offsetY(): Number;
    setOffsetY(offsetY: Number): this;
    get textAlign(): String;
    setTextAlign(textAlign: String): this;
    get textBaseline(): String;
    setTextBaseline(textBaseline: String): this;
}
