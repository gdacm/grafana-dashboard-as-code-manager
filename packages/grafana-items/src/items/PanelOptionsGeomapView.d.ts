import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapView extends GrafanaItem {
    setAllLayers(allLayers: Boolean): this;
    setId(id: String): this;
    setLat(lat: Number): this;
    setLon(lon: Number): this;
    setNoRepeat(noRepeat: Boolean): this;
    setShared(shared: Boolean): this;
    setZoom(zoom: Number): this;
}
