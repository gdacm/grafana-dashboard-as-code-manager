import { GrafanaItem } from "../items/GrafanaItem.js";
import { MetaClassRegistry } from "./MetaClassRegistry.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 */

/**
 * @template T
 * @typedef {import("@gdacm/base-types").MetaConstructor<T>} MetaConstructor
 */

/**
 * @template {Object} T
 * @template {T} C
 * @typedef {import("./MetaClassRegistry.js").MetaClassInfo<T,C>} MetaClassInfo
 */

/**
 * @type {MetaClassRegistry<GrafanaItem>}
 */
const types = new MetaClassRegistry();

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @returns {boolean} Whether the type exists in the map
 */
export const hasType = (cls) => types.has(cls);

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @returns {MetaClassInfo<GrafanaItem,C>}
 */
export const getMetaClassInfo = (cls) => types.get(cls);

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @param {MetaClassInfo<GrafanaItem,C>} metaClassInfo
 */
export const setTypeMetaClassInfo = (cls, metaClassInfo) => types.set(cls, metaClassInfo);

/**
 * @returns {Array<MetaConstructor<GrafanaItem>>}
 */
export const getTypesRegistryKeys = () => types.keys()

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @returns {Record<string, unknown>}
 */
const getPrototype = (cls) => (/** @type {Record<string, unknown>} */(cls.prototype));

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @param {string} name 
 */
export function hasPrototype(cls, name) {
    return getPrototype(cls)[name] !== undefined;
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @param {string} name 
 * @param {Function} value 
 */
export function setPrototype(cls, name, value) {
    getPrototype(cls)[name] = value;
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name 
 * @param {(self: C) => any} getter 
 */
export function setGetter(cls, name, getter) {
    Object.defineProperty(cls.prototype, name, {
        get() {
            return getter(this);
        },
        enumerable: false,
        configurable: true
    });
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name 
 * @param {(instance: C, value: any) => void} setter 
 */
export function setSetter(cls, name, setter) {
    Object.defineProperty(cls.prototype, name, {
        set(value) {
            return setter(this, value);
        },
        enumerable: false,
        configurable: true
    });
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name 
 * @param {(self: C) => any} getter 
 * @param {(instance: C, value: any) => void} setter 
 */
export function setGetterAndSetter(cls, name, getter, setter) {
    Object.defineProperty(cls.prototype, name, {
        get() {
            return getter(this);
        },
        set(value) {
            return setter(this, value);
        },
        enumerable: false,
        configurable: true
    });
}

/**
 * @template {GrafanaItem} C
 * @param {MetaClassInfo<GrafanaItem,C>} metaClassInfo
 * @param {string} typeName
 */
export const addTypeNameToInclude = (metaClassInfo, typeName) => {
    if (metaClassInfo.typeNamesToInclude.includes(typeName) === false) {
        if (['String', 'Number', 'Boolean', 'Array', 'Object'].indexOf(typeName) === -1) {
            metaClassInfo.typeNamesToInclude.push(typeName);
        }
    }
};

/**
 * @template {GrafanaItem} C
 * @param {MetaClassInfo<GrafanaItem,C>} metaClassInfo
 * @param {(typeof GrafanaItem)[]} [typesToInclude]
 */
export const addTypesToInclude = (metaClassInfo, typesToInclude) => {
    if (typesToInclude !== undefined) {
        for (const type of typesToInclude) {
            addTypeNameToInclude(metaClassInfo, type.name);
        }
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @returns {string}
 */
export function getType(cls) {
    const clsName = cls.name;
    const metaClassInfo = getMetaClassInfo(cls);

    return `export declare class ${clsName}${metaClassInfo.parentName ? " extends " : ""}${metaClassInfo.parentName || ""} {
${metaClassInfo.methods.map((method) => `    ${method}`).join('\n')}
}
`
}

/**
 * @returns {(string|string[]|undefined)[][]}
 */
export function getTypes() {
    /**
     * @type {MetaConstructor<GrafanaItem>[]}
     */
    return getTypesRegistryKeys()
        .map(
            (cls) => [
                cls.name, getType(cls), getMetaClassInfo(cls).parentName, getMetaClassInfo(cls).typeNamesToInclude
            ]);
}
