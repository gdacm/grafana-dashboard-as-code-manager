import { PanelOptions } from "./PanelOptions.js";
import { PanelOptionsTextCode } from "./PanelOptionsTextCode.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsText extends PanelOptions {
    setCode(code: PanelOptionsTextCode): this;
    setNewCode(onNewCreated: ((item: PanelOptionsTextCode) => PanelOptionsTextCode) | undefined): this;
    withCode(onWith: (item: PanelOptionsTextCode) => void): this;
    get code(): PanelOptionsTextCode;
    get content(): String;
    setContent(content: String): this;
    get mode(): String;
    setMode(mode: String): this;
}
