import { Target } from "./Target.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TargetDataQuery extends Target {
    get refId(): String;
    setRefId(refId: String): this;
}
