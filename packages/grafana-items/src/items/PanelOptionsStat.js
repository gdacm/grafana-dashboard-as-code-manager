import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/GrafanaItemClassBuilder.js";

export const PanelOptionsStat = defineGrafanaItemClass('PanelOptionsStat', PanelOptions)
    .asClass
