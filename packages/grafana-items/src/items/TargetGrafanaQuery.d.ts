import { TargetDataQuery } from "./TargetDataQuery.js";
import { GrafanaQueryFile } from "./GrafanaQueryFile.js";
import { TimeRegionConfig } from "./TimeRegionConfig.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class TargetGrafanaQuery extends TargetDataQuery {
    get buffer(): Number;
    setBuffer(buffer: Number): this;
    get channel(): String;
    setChannel(channel: String): this;
    get dropPercent(): Number;
    setDropPercent(dropPercent: Number): this;
    setFile(file: GrafanaQueryFile): this;
    setNewFile(onNewCreated: ((item: GrafanaQueryFile) => GrafanaQueryFile) | undefined): this;
    withFile(onWith: (item: GrafanaQueryFile) => void): this;
    get file(): GrafanaQueryFile;
    get max(): Number;
    setMax(max: Number): this;
    get min(): Number;
    setMin(min: Number): this;
    get noise(): Number;
    setNoise(noise: Number): this;
    get path(): String;
    setPath(path: String): this;
    get queryType(): String;
    setQueryType(queryType: String): this;
    get search(): String;
    setSearch(search: String): this;
    get searchNext(): String;
    setSearchNext(searchNext: String): this;
    get seriesCount(): Number;
    setSeriesCount(seriesCount: Number): this;
    initSnapshot(): this;
    get snapshot(): Object[];
    addSnapshotItem(snapshotItem: Object): this;
    addNewSnapshotItem(onNewCreated: (item: Object) => Object): this;
    withSnapshot(onWith: (snapshot: Object[]) => void): this;
    get spread(): Number;
    setSpread(spread: Number): this;
    get startValue(): Number;
    setStartValue(startValue: Number): this;
    setTimeRegion(timeRegion: TimeRegionConfig): this;
    setNewTimeRegion(onNewCreated: ((item: TimeRegionConfig) => TimeRegionConfig) | undefined): this;
    withTimeRegion(onWith: (item: TimeRegionConfig) => void): this;
    get timeRegion(): TimeRegionConfig;
}
