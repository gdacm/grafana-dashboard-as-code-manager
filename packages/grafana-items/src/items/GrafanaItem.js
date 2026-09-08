import { asJson } from "../utils/json.js";
import { defineClass } from "../utils/typesDefinition.js";

export class GrafanaItem {
    /**
     * @param {import("../../../base-types/src/index.js").MetaOptions<import("../../../base-types/src/index.js").GenericOptions>} metaOptions An object with options
     */
    constructor(metaOptions) {
        this._metaOptions = metaOptions || {};
        this._grafanaValues = {};
        this._grafanaArrays = {};
        this._grafanaObjects = {};
        this._onInit();
    }

    /**
     * @returns {Object} The meta options of the Grafana item
     */
    get metaOptions() {
        return this._metaOptions;
    }

    /**
     * @param {(metaOptions: Object) => void} code 
     * @returns {this}
     */
    withMetaOptions(code) {
        code(this.metaOptions);
        return this;
    }

    /**
     * @param {(item: this) => void} code 
     * @returns {this}
     */
    with(code) {
        code(this);
        return this;
    }

    /**
     * 
     * @template T
     * @param {string} key 
     * @param {T} value 
     * @returns 
     */
    _setValue(key, value) {
        this._grafanaValues[key] = asJson(value);
        return this;
    }

    /**
     * 
     * @template T
     * @param {string} key
     * @param {T} value
     * @returns 
     */
    _getValue(key) {
        return this._grafanaValues[key];
    }

    /**
     * @returns {Object} The JSON representation of the Grafana item
     */
    asJson() {
        const values = { ...this._grafanaValues };
        for (const key in this._grafanaArrays) {
            values[key] = this._grafanaArrays[key].map(item => asJson(item));
        }
        for (const key in this._grafanaObjects) {
            values[key] = asJson(this._grafanaObjects[key]);
        }
        return asJson(values);
    }

    /**
     * @param {string} key
     */
    _initArray(key) {
        this._getArray(key);
        return this;
    }

    /**
     * @template T
     * @param {string} key 
     * @return {T[]}
     */
    _getArray(key) {
        if (!this._grafanaArrays[key]) {
            this._grafanaArrays[key] = [];
        }
        return this._grafanaArrays[key];
    }

    /**
     * @template T
     * @param {string} key 
     * @param {T} item 
     * @returns {this}
     */
    _addArrayItem(key, item) {
        this._getArray(key).push(item);
        return this;
    }

    /**
     * @template T
     * @param {string} key 
     * @param {T} value 
     * @returns {this}
     */
    _setObject(key, value) {
        this._grafanaObjects[key] = value;
        return this;
    }

    /**
     * @template T
     * @param {string} key 
     * @returns {T|undefined}
     */
    _getObject(key) {
        if (!this._grafanaObjects[key]) {
            this._grafanaObjects[key] = undefined;
        }
        return this._grafanaObjects[key];
    }

    /**
     * 
     * @template T
     * @param {string} key
     * @param {(item: T) => void} code 
     * @returns {this}
     */
    _withObject(key, code) {
        const obj = this._getObject(key);
        if (obj) {
            code(obj);
        }
        return this;
    }
}

defineClass(GrafanaItem)
    .defineMember('constructor(metaOptions: GenericMetaOptions)')
    .defineMember('get metaOptions(): GenericMetaOptions')
    .defineMember('withMetaOptions(code: (metaOptions: GenericMetaOptions) => void): this')
    .defineMember('with(code: (item: this) => void): this')
    .defineMember('asJson(): Object;')
    .defineMember('_onInit(): void;')
    .defineMember('_setValue<T>(key: string, value: T): this;')
    .defineMember('_getValue<T>(key: string): T;')
    .defineMember('_initArray(key: string): this;')
    .defineMember('_getArray<T>(key: string): T[];')
    .defineMember('_addArrayItem<T>(key: string, item: T): this;')
    .defineMember('_setObject<T>(key: string, value: T): this;')
    .defineMember('_getObject<T>(key: string): T;')
    .defineMember('_withObject<T>(key: string, code: (item: T) => void): this;')
