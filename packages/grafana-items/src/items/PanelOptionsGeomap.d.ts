import { PanelOptions } from "./PanelOptions.js";
import { PanelOptionsGeomapBasemap } from "./PanelOptionsGeomapBasemap.js";
import { PanelOptionsGeomapControls } from "./PanelOptionsGeomapControls.js";
import { PanelOptionsGeomapLayer } from "./PanelOptionsGeomapLayer.js";
import { PanelOptionsGeomapTooltip } from "./PanelOptionsGeomapTooltip.js";
import { PanelOptionsGeomapView } from "./PanelOptionsGeomapView.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomap extends PanelOptions {
    setBasemap(basemap: PanelOptionsGeomapBasemap): this;
    setNewBasemap(onNewCreated: ((item: PanelOptionsGeomapBasemap) => PanelOptionsGeomapBasemap) | undefined): this;
    withBasemap(onWith: (item: PanelOptionsGeomapBasemap) => void): this;
    get basemap(): PanelOptionsGeomapBasemap;
    setControls(controls: PanelOptionsGeomapControls): this;
    setNewControls(onNewCreated: ((item: PanelOptionsGeomapControls) => PanelOptionsGeomapControls) | undefined): this;
    withControls(onWith: (item: PanelOptionsGeomapControls) => void): this;
    get controls(): PanelOptionsGeomapControls;
    initLayers(): this;
    get layers(): PanelOptionsGeomapLayer[];
    addLayer(layer: PanelOptionsGeomapLayer): this;
    addNewLayer(onNewCreated: (item: PanelOptionsGeomapLayer) => PanelOptionsGeomapLayer): this;
    withLayers(onWith: (layers: PanelOptionsGeomapLayer[]) => void): this;
    setTooltip(tooltip: PanelOptionsGeomapTooltip): this;
    setNewTooltip(onNewCreated: ((item: PanelOptionsGeomapTooltip) => PanelOptionsGeomapTooltip) | undefined): this;
    withTooltip(onWith: (item: PanelOptionsGeomapTooltip) => void): this;
    get tooltip(): PanelOptionsGeomapTooltip;
    setView(view: PanelOptionsGeomapView): this;
    setNewView(onNewCreated: ((item: PanelOptionsGeomapView) => PanelOptionsGeomapView) | undefined): this;
    withView(onWith: (item: PanelOptionsGeomapView) => void): this;
    get view(): PanelOptionsGeomapView;
}
