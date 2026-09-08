import { GrafanaItem } from "./GrafanaItem.js";
import { ThresholdsStep } from "./ThresholdsStep.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Thresholds extends GrafanaItem {
    setMode(mode: String): this;
    initSteps(): this;
    get steps(): ThresholdsStep[];
    addStep(step: ThresholdsStep): this;
    addNewStep(onNewCreated: (item: ThresholdsStep) => ThresholdsStep): this;
    withSteps(onWith: (steps: ThresholdsStep[]) => void): this;
    addStepWithValueAndColor(value: number, color: string): this;
}
