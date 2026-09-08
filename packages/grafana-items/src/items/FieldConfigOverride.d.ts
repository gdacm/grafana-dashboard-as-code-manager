import { GrafanaItem } from "./GrafanaItem.js";
import { OverrideMatcher } from "./OverrideMatcher.js";
import { OverrideProperty } from "./OverrideProperty.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class FieldConfigOverride extends GrafanaItem {
    setSystemRef(systemRef: String): this;
    setMatcher(matcher: OverrideMatcher): this;
    setNewMatcher(onNewCreated: ((item: OverrideMatcher) => OverrideMatcher) | undefined): this;
    withMatcher(onWith: (item: OverrideMatcher) => void): this;
    get matcher(): OverrideMatcher;
    initProperties(): this;
    get properties(): OverrideProperty[];
    addProperty(property: OverrideProperty): this;
    addNewProperty(onNewCreated: (item: OverrideProperty) => OverrideProperty): this;
    withProperties(onWith: (properties: OverrideProperty[]) => void): this;
}
