import { GrafanaItem } from "../items/GrafanaItem.js";
import { defineValue, defineBasicObject, defineObject, defineArray, defineBasicArray, defineConstructor, defineMember, defineMethod, defineGetterSetter } from "./typesDefinition.js";
import { getMetaClassInfo, hasType, setTypeMetaClassInfo } from "./typesReference.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 */

/**
 * @template {Object} T
 * @template {T} C
 * @typedef {import("./MetaClassRegistry.js").MetaClassInfo<T,C>} MetaClassInfo
 */

/**
 * @template T
 * @typedef {import("@gdacm/base-types").MetaConstructor<T>} MetaConstructor
 */

/**
 * @template {GrafanaItem} C
 */
export class GrafanaItemClassBuilder {
    /**
     * @param {MetaConstructor<C>} cls
     */
    constructor(cls) {
        /** @type {MetaConstructor<C>} */
        this._cls = cls;
    }

    /**
     * @return {MetaConstructor<C>}
     */
    get cls() {
        return this._cls;
    }

    /**
     * @param {MetaConstructor<GrafanaItem>} parent
     * @returns 
     */
    setParent(parent) {
        this.parent = parent;
        return this;
    }

    /**
     * @param {string} key 
     * @param {Function} type
     * @param {Object} [option]
     * @param {string} [option.name]
     * @param {(instance: C) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => C} [option.onDefault]
     * @param {String} [option.typeName]
     * @return {this}
     */
    defineValue(key, type, option) {
        defineValue(this.cls, key, type, option);
        return this;
    }

    /**
     * @template {GrafanaItem} T
     * @param {string} key 
     * @param {MetaConstructor<T>} type 
     * @param {Object} [option]
     * @param {string} [option.name]
     * @param {(instance: C) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => T} [option.onDefault]
     * @param {String} [option.typeName]
     * @param {String} [option.setNew]
     * @return {this}
     */
    defineObject(key, type, option) {
        defineObject(this.cls, key, type, option);
        return this;
    }

    /**
     * @param {string} key 
     * @param {Function} type 
     * @param {Object} [option]
     * @param {string} [option.name]
     * @param {(instance: C) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => Object} [option.onDefault]
     * @param {String} [option.typeName]
     * @return {this}
     */
    defineBasicObject(key, type, option) {
        defineBasicObject(this.cls, key, type, option);
        return this;
    }

    /**
     * @template {GrafanaItem} T
     * @param {string} key 
     * @param {MetaConstructor<T>} type 
     * @param {Object} [option]
     * @param {string} [option.name]
     * @param {string} [option.itemName]
     * @param {boolean} [option.setEmpty]
     * @param {(instance: C) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => T[]} [option.onDefault]
     * @return {this}
     */
    defineArray(key, type, option) {
        defineArray(this.cls, key, type, option);
        return this;
    }

    /**
     * @param {string} key 
     * @param {Function} type 
     * @param {Object} [option]
     * @param {string} [option.name]
     * @param {string} [option.itemName]
     * @param {boolean} [option.setEmpty]
     * @param {(instance: C) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => Object[]} [option.onDefault]
     * @return {this}
     */
    defineBasicArray(key, type, option) {
        defineBasicArray(this.cls, key, type, option);
        return this;
    }

    /**
     * @param {string} method
     * @param {Object} [option]
     * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
     * @return {this}
     */
    defineMember(method, option) {
        defineMember(this.cls, method, option);
        return this;
    }

    /**
     * @param {(instance: C) => void} code
     * @return {this}
     */
    defineConstructor(code) {
        defineConstructor(this.cls, /** @type {(instance: C) => void} */ (code));
        return this;
    }

    /**
     * @param {string} name
     * @param {string} args
     * @param {Object} option
     * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
     * @param {(instance: C, ...args: any[]) => any} option.code
     * @return {this}
     */
    defineMethod(name, args, option) {
        defineMethod(this.cls, name, args, option)
        return this;
    }

    /**
     * @param {string} name
     * @param {string} typeName
     * @param {Object} option
     * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
     * @param {(instance: C) => any} [option.getter]
     * @param {(instance: C, value: any) => void} [option.setter]
     * @return {this}
     */
    defineGetterSetter(name, typeName, option) {
        defineGetterSetter(this.cls, name, typeName, option);
        return this;
    }

    /**
     * @param {(instance: this) => void} code 
     */
    with(code) {
        code(this);
        return this;
    }

    /**
     * @returns {typeof GrafanaItem}
     */
    get asClass() {
        return this.cls;
    }
}

/**
 * @template {GrafanaItem} C
 * @param {string} name
 * @param {typeof GrafanaItem} parent
 * @returns {GrafanaItemClassBuilder<C>}
 */
export const defineGrafanaItemClass = (name, parent) => {
    const cls = class extends parent { };
    Object.defineProperty(cls, 'name', { value: name });
    return defineClass(/** @type {MetaConstructor<C>} */ (cls))
        .setParent(parent);
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 */
export function defineClass(cls) {
    if (!hasType(cls)) {
        /** @type {Function|undefined} */
        let parent = Object.getPrototypeOf(cls);
        if (parent && !parent.name) {
            parent = undefined;
        }
        /** @type {((instance: C)=>void)[]} */
        let onInitsParent = [];
        if (parent && parent.name) {
            // @ts-ignore
            onInitsParent = getMetaClassInfo(parent).onInits;
        }
        /** @type {MetaClassInfo<GrafanaItem,C>} */
        const metaClassInfo = {
            methods: [],
            onInits: [...onInitsParent],
            parentName: parent?.name,
            // @ts-ignore
            parent: parent,
            typeNamesToInclude: [],
        };
        cls.prototype._onInit = function () {
            for (const onInit of metaClassInfo.onInits) {
                onInit(this);
            }
        }
        setTypeMetaClassInfo(cls, metaClassInfo);
    }
    return new GrafanaItemClassBuilder(cls);
}
