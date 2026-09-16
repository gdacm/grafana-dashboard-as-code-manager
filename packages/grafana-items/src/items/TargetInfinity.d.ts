import { Target } from "./Target.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TargetInfinity extends Target {
    setColumns(columns: Object): this;
    withColumns(onWith: (item: Object) => void): this;
    get columns(): Object;
    setComputedColumns(computedColumns: Object): this;
    withComputedColumns(onWith: (item: Object) => void): this;
    get computedColumns(): Object;
    get format(): String;
    setFormat(format: String): this;
    get parser(): String;
    setParser(parser: String): this;
    get source(): String;
    setSource(source: String): this;
    get type(): String;
    setType(type: String): this;
    get uql(): String;
    setUql(uql: String): this;
    get url(): String;
    setUrl(url: String): this;
    get urlOptions(): Object;
    setUrlOptions(urlOptions: Object): this;
}
