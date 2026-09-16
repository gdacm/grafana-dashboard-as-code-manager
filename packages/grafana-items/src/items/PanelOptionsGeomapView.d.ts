import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PanelOptionsGeomapView extends GrafanaItem {
    get allLayers(): Boolean;
    setAllLayers(allLayers: Boolean): this;
    get id(): String;
    setId(id: String): this;
    get lat(): Number;
    setLat(lat: Number): this;
    get lon(): Number;
    setLon(lon: Number): this;
    get noRepeat(): Boolean;
    setNoRepeat(noRepeat: Boolean): this;
    get shared(): Boolean;
    setShared(shared: Boolean): this;
    get zoom(): Number;
    setZoom(zoom: Number): this;
}
