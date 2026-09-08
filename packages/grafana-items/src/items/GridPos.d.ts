import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class GridPos extends GrafanaItem {
    setX(x: Number): this;
    setY(y: Number): this;
    setW(w: Number): this;
    setH(h: Number): this;
    setPos(x: number, y: number, w: number, h: number): this;
}
