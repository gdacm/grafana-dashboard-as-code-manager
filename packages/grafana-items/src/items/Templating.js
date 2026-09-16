import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";
import { Template } from "./Template.js";

export const Templating = defineGrafanaItemClass('Templating', GrafanaItem)
    .defineArray('list', Template, { itemName: 'template' })
    .asClass
