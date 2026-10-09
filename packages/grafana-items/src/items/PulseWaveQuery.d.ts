import { GrafanaItem } from "./GrafanaItem.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class PulseWaveQuery extends GrafanaItem {
    get offCount(): Number;
    setOffCount(offCount: Number): this;
    get offValue(): Number;
    setOffValue(offValue: Number): this;
    get onCount(): Number;
    setOnCount(onCount: Number): this;
    get onValue(): Number;
    setOnValue(onValue: Number): this;
    get timeStep(): Number;
    setTimeStep(timeStep: Number): this;
}
