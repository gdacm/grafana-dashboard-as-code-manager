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
    setNewColor(onNewCreated: ((item: StyleColor) => StyleColor) | undefined): this;
    withColor(onWith: (item: StyleColor) => void): this;
    get color(): StyleColor;
    setOpacity(opacity: Number): this;
    setRotation(rotation: StyleRotation): this;
    setNewRotation(onNewCreated: ((item: StyleRotation) => StyleRotation) | undefined): this;
    withRotation(onWith: (item: StyleRotation) => void): this;
    get rotation(): StyleRotation;
    setSize(size: StyleSize): this;
    setNewSize(onNewCreated: ((item: StyleSize) => StyleSize) | undefined): this;
    withSize(onWith: (item: StyleSize) => void): this;
    get size(): StyleSize;
    setSymbol(symbol: StyleSymbol): this;
    setNewSymbol(onNewCreated: ((item: StyleSymbol) => StyleSymbol) | undefined): this;
    withSymbol(onWith: (item: StyleSymbol) => void): this;
    get symbol(): StyleSymbol;
    setSymbolAlign(symbolAlign: StyleSymbolAlign): this;
    setNewSymbolAlign(onNewCreated: ((item: StyleSymbolAlign) => StyleSymbolAlign) | undefined): this;
    withSymbolAlign(onWith: (item: StyleSymbolAlign) => void): this;
    get symbolAlign(): StyleSymbolAlign;
    setTextConfig(textConfig: StyleTextConfig): this;
    setNewTextConfig(onNewCreated: ((item: StyleTextConfig) => StyleTextConfig) | undefined): this;
    withTextConfig(onWith: (item: StyleTextConfig) => void): this;
    get textConfig(): StyleTextConfig;
}
