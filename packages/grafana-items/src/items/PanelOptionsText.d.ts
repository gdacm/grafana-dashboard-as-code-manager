import { PanelOptions } from "./PanelOptions.js";
import { PanelOptionsTextCode } from "./PanelOptionsTextCode.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsText extends PanelOptions {
    setCode(code: PanelOptionsTextCode): this;
    setNewCode(onNewCreated: ((item: PanelOptionsTextCode) => PanelOptionsTextCode) | undefined): this;
    withCode(onWith: (item: PanelOptionsTextCode) => void): this;
    get code(): PanelOptionsTextCode;
    setContent(content: String): this;
    setMode(mode: String): this;
}
