import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsTextCode extends GrafanaItem {
    setLanguage(language: String): this;
    setShowLineNumbers(showLineNumbers: Boolean): this;
    setShowMiniMap(showMiniMap: Boolean): this;
}
