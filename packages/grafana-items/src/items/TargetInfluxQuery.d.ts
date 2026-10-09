import { TargetDataQuery } from "./TargetDataQuery.js";
import { InfluxQueryPart } from "./InfluxQueryPart.js";
import { InfluxQueryTag } from "./InfluxQueryTag.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TargetInfluxQuery extends TargetDataQuery {
    get alias(): String;
    setAlias(alias: String): this;
    get fill(): String;
    setFill(fill: String): this;
    setGroupBy(groupBy: InfluxQueryPart): this;
    setNewGroupBy(onNewCreated: ((item: InfluxQueryPart) => InfluxQueryPart) | undefined): this;
    withGroupBy(onWith: (item: InfluxQueryPart) => void): this;
    get groupBy(): InfluxQueryPart;
    get measurement(): String;
    setMeasurement(measurement: String): this;
    get orderByTime(): String;
    setOrderByTime(orderByTime: String): this;
    get policy(): String;
    setPolicy(policy: String): this;
    get query(): String;
    setQuery(query: String): this;
    get queryType(): String;
    setQueryType(queryType: String): this;
    get rawQuery(): Boolean;
    setRawQuery(rawQuery: Boolean): this;
    get resultFormat(): String;
    setResultFormat(resultFormat: String): this;
    get slimit(): String;
    setSlimit(slimit: String): this;
    initTags(): this;
    get tags(): InfluxQueryTag[];
    addTag(tag: InfluxQueryTag): this;
    addNewTag(onNewCreated: (item: InfluxQueryTag) => InfluxQueryTag): this;
    withTags(onWith: (tags: InfluxQueryTag[]) => void): this;
    get textEditor(): Boolean;
    setTextEditor(textEditor: Boolean): this;
    get tz(): String;
    setTz(tz: String): this;
}
