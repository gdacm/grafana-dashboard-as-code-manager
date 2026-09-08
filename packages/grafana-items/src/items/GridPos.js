import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";

export const GridPos = defineGrafanaItemClass('GridPos', GrafanaItem)
    .defineValue('x', Number)
    .defineValue('y', Number)
    .defineValue('w', Number)
    .defineValue('h', Number)
    .defineMethod('setPos', '(x: number, y: number, w: number, h: number): this;', {
        /**
         * @param {GridPos} gridPos
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @returns {GridPos}
         */
        code: (gridPos, x, y, w, h) => {
            gridPos.setX(x);
            gridPos.setY(y);
            gridPos.setW(w);
            gridPos.setH(h);
            return gridPos;
        }
    })
    .asClass