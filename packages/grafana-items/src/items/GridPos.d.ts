import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class GridPos extends GrafanaItem {
    get x(): Number;
    setX(x: Number): this;
    get y(): Number;
    setY(y: Number): this;
    get w(): Number;
    setW(w: Number): this;
    get h(): Number;
    setH(h: Number): this;
    setPos(x: number, y: number, w: number, h: number): this;
}
