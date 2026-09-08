import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class GrafanaItem {
    constructor(metaOptions: GenericMetaOptions)
    get metaOptions(): GenericMetaOptions
    withMetaOptions(code: (metaOptions: GenericMetaOptions) => void): this
    with(code: (item: this) => void): this
    asJson(): Object;
    _onInit(): void;
    _setValue<T>(key: string, value: T): this;
    _getValue<T>(key: string): T;
    _initArray(key: string): this;
    _getArray<T>(key: string): T[];
    _addArrayItem<T>(key: string, item: T): this;
    _setObject<T>(key: string, value: T): this;
    _getObject<T>(key: string): T;
    _withObject<T>(key: string, code: (item: T) => void): this;
}
