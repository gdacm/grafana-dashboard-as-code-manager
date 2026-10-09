import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class StreamingQuery extends GrafanaItem {
    get bands(): Number;
    setBands(bands: Number): this;
    get noise(): Number;
    setNoise(noise: Number): this;
    get speed(): Number;
    setSpeed(speed: Number): this;
    get spread(): Number;
    setSpread(spread: Number): this;
    get type(): String;
    setType(type: String): this;
    get url(): String;
    setUrl(url: String): this;
}
