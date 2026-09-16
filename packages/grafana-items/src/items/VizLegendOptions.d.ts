import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class VizLegendOptions extends GrafanaItem {
    get asTable(): Boolean;
    setAsTable(asTable: Boolean): this;
    initCalcs(): this;
    get calcs(): String[];
    addCalc(calc: String): this;
    withCalcs(onWith: (calcs: String[]) => void): this;
    get displayMode(): String;
    setDisplayMode(displayMode: String): this;
    get isVisible(): Boolean;
    setIsVisible(isVisible: Boolean): this;
    get limit(): Number;
    setLimit(limit: Number): this;
    get overflow(): String;
    setOverflow(overflow: String): this;
    get placement(): String;
    setPlacement(placement: String): this;
    get showLegend(): Boolean;
    setShowLegend(showLegend: Boolean): this;
    get sortBy(): String;
    setSortBy(sortBy: String): this;
    get sortDesc(): Boolean;
    setSortDesc(sortDesc: Boolean): this;
    get width(): Number;
    setWidth(width: Number): this;
}
