import { GrafanaItem } from "./GrafanaItem.js";
import { Annotation } from "./Annotation.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Annotations extends GrafanaItem {
    initList(): this;
    get list(): Annotation[];
    addAnnotation(annotation: Annotation): this;
    addNewAnnotation(onNewCreated: (item: Annotation) => Annotation): this;
    withList(onWith: (list: Annotation[]) => void): this;
}
