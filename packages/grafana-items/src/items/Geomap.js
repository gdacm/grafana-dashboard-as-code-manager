import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsGeomap } from "../index.js";
import { FieldConfigCustomGeomap } from "./FieldConfigCustomGeomap.js";
import { definePanel } from "./properties/panel.js";

export const Geomap = defineGrafanaItemClass('Geomap', Panel)
    .with(builder => definePanel(builder, 'geomap', FieldConfigCustomGeomap, PanelOptionsGeomap))
    .asClass
