import { Target } from "./Target.js";


import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TargetInfinity extends Target {
    setColumns(columns: Object): this;
    withColumns(onWith: (item: Object) => void): this;
    get columns(): Object;
    setComputedColumns(computedColumns: Object): this;
    withComputedColumns(onWith: (item: Object) => void): this;
    get computedColumns(): Object;
    setFormat(format: String): this;
    setParser(parser: String): this;
    setSource(source: String): this;
    setType(type: String): this;
    setUql(uql: String): this;
    setUrl(url: String): this;
    setUrlOptions(urlOptions: Object): this;
}
