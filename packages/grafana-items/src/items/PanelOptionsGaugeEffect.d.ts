import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGaugeEffect extends GrafanaItem {
    get barGlow(): Boolean;
    setBarGlow(barGlow: Boolean): this;
    get centerGlow(): Boolean;
    setCenterGlow(centerGlow: Boolean): this;
    get gradient(): Boolean;
    setGradient(gradient: Boolean): this;
}
