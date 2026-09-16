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
function hasPrototype(cls, name) {
    return getPrototype(cls)[name] !== undefined;
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @param {string} name 
 * @param {Function} value 
 */
function setPrototype(cls, name, value) {
    getPrototype(cls)[name] = value;
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name 
 * @param {(self: C) => any} getter 
 */
function setGetter(cls, name, getter) {
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
function setSetter(cls, name, setter) {
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
function setGetterAndSetter(cls, name, getter, setter) {
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
 * @param {MetaConstructor<C>} cls 
 * @param {string} typeName
 */
export const addTypeNameToInclude = (cls, typeName) => {
    const metaClassInfo = getMetaClassInfo(cls);
    if (metaClassInfo.typeNamesToInclude.includes(typeName) === false) {
        if (['String', 'Number', 'Boolean', 'Array', 'Object'].indexOf(typeName) === -1) {
            metaClassInfo.typeNamesToInclude.push(typeName);
        }
    }
};

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {(typeof GrafanaItem)[]} [typesToInclude]
 */
export const addTypesToInclude = (cls, typesToInclude) => {
    if (typesToInclude !== undefined) {
        for (const type of typesToInclude) {
            addTypeNameToInclude(cls, type.name);
        }
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaClassInfo<GrafanaItem,C>} metaClassInfo
 * @param {string} signature 
 */
const addSignatureOnMetaClassInfo = (metaClassInfo, signature) => {
    if (metaClassInfo.methods.includes(signature) === false) {
        metaClassInfo.methods.push(signature);
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @param {string} signature 
 */
export const addSignature = (cls, signature) => {
    const metaClassInfo = getMetaClassInfo(cls);
    addSignatureOnMetaClassInfo(metaClassInfo, signature);
}


/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @param {string} name 
 * @param {string} postSignature
 * @param {Function} value 
 */
export const setPrototypeWithSignature = (cls, name, postSignature, value) => {
    setPrototype(cls, name, value);
    addSignature(cls, `${name}${postSignature}`);
};

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name 
 * @param {(self: C) => any} getter 
 * @param {(instance: C, value: any) => void} setter 
 * @param {string} typeName
 */
export function setGetterAndSetterWithSignature(cls, name, getter, setter, typeName) {
    setGetterAndSetter(cls, name, getter, setter);
    addSignature(cls, `get ${name}(): ${typeName};`);
    addSignature(cls, `set ${name}(value: ${typeName});`);
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name 
 * @param {(self: C) => any} getter 
 * @param {string} typeName
 */
export function setGetterWithSignature(cls, name, getter, typeName) {
    setGetter(cls, name, getter);
    addSignature(cls, `get ${name}(): ${typeName};`);
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name 
 * @param {(instance: C, value: any) => void} setter 
 * @param {string} typeName
 */
export function setSetterWithSignature(cls, name, setter, typeName) {
    setSetter(cls, name, setter);
    addSignature(cls, `set ${name}(value: ${typeName});`);
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {((instance: C) => void)|undefined} onInit
 */
export function addOnInit(cls, onInit) {
    const metaClassInfo = getMetaClassInfo(cls);
    if (onInit) {
        metaClassInfo.onInits.push(onInit);
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
