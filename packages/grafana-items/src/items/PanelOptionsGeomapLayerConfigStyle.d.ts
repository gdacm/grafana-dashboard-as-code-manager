import { GrafanaItem } from "./GrafanaItem.js";
import { StyleColor } from "./StyleColor.js";
import { StyleRotation } from "./StyleRotation.js";
import { StyleSize } from "./StyleSize.js";
import { StyleSymbol } from "./StyleSymbol.js";
import { StyleSymbolAlign } from "./StyleSymbolAlign.js";
import { StyleTextConfig } from "./StyleTextConfig.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapLayerConfigStyle extends GrafanaItem {
    setColor(color: StyleColor): this;
    withColor(onWith: (item: StyleColor) => void): this;
    get color(): StyleColor;
    setOpacity(opacity: Number): this;
    setRotation(rotation: StyleRotation): this;
    withRotation(onWith: (item: StyleRotation) => void): this;
    get rotation(): StyleRotation;
    setSize(size: StyleSize): this;
    withSize(onWith: (item: StyleSize) => void): this;
    get size(): StyleSize;
    setSymbol(symbol: StyleSymbol): this;
    withSymbol(onWith: (item: StyleSymbol) => void): this;
    get symbol(): StyleSymbol;
    setSymbolAlign(symbolAlign: StyleSymbolAlign): this;
    withSymbolAlign(onWith: (item: StyleSymbolAlign) => void): this;
    get symbolAlign(): StyleSymbolAlign;
    setTextConfig(textConfig: StyleTextConfig): this;
    withTextConfig(onWith: (item: StyleTextConfig) => void): this;
    get textConfig(): StyleTextConfig;
}
