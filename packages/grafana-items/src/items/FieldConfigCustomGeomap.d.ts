import { FieldConfigCustom } from "./FieldConfigCustom.js";
import { HideFrom } from "./HideFrom.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigCustomGeomap extends FieldConfigCustom {
    setHideFrom(hideFrom: HideFrom): this;
    withHideFrom(onWith: (item: HideFrom) => void): this;
    get hideFrom(): HideFrom;
}
