import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGaugeEffect extends GrafanaItem {
    setBarGlow(barGlow: Boolean): this;
    setCenterGlow(centerGlow: Boolean): this;
    setGradient(gradient: Boolean): this;
}
