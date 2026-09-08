import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { Annotation } from "./Annotation.js";

export const Annotations = defineGrafanaItemClass('Annotations', GrafanaItem)
    .defineArray('list', Annotation, { itemName: 'annotation' })
    .asClass
