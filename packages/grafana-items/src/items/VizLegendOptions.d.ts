import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class VizLegendOptions extends GrafanaItem {
    setAsTable(asTable: Boolean): this;
    initCalcs(): this;
    get calcs(): String[];
    addCalc(calc: String): this;
    addNewCalc(onNewCreated: (item: String) => String): this;
    withCalcs(onWith: (calcs: String[]) => void): this;
    setDisplayMode(displayMode: String): this;
    setIsVisible(isVisible: Boolean): this;
    setLimit(limit: Number): this;
    setOverflow(overflow: String): this;
    setPlacement(placement: String): this;
    setShowLegend(showLegend: Boolean): this;
    setSortBy(sortBy: String): this;
    setSortDesc(sortDesc: Boolean): this;
    setWidth(width: Number): this;
}
