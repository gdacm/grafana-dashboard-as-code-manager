import { PanelOptions } from "./PanelOptions.js";
import { PanelOptionsTableSortBy } from "./PanelOptionsTableSortBy.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsTable extends PanelOptions {
    get cellHeight(): String;
    setCellHeight(cellHeight: String): this;
    get showHeader(): Boolean;
    setShowHeader(showHeader: Boolean): this;
    initSortBy(): this;
    get sortBy(): PanelOptionsTableSortBy[];
    addSortByItem(sortByItem: PanelOptionsTableSortBy): this;
    addNewSortByItem(onNewCreated: (item: PanelOptionsTableSortBy) => PanelOptionsTableSortBy): this;
    withSortBy(onWith: (sortBy: PanelOptionsTableSortBy[]) => void): this;
}
