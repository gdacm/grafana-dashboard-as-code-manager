import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsTextCode extends GrafanaItem {
    get language(): String;
    setLanguage(language: String): this;
    get showLineNumbers(): Boolean;
    setShowLineNumbers(showLineNumbers: Boolean): this;
    get showMiniMap(): Boolean;
    setShowMiniMap(showMiniMap: Boolean): this;
}
