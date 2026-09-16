import { GrafanaItem } from "../items/GrafanaItem.js";
import { defineValue, defineObject, defineGrafanaObject, defineArray, defineBasicArray, defineMemberInternal, defineConstructor, hasType, setTypeMetaClassInfo, getMetaClassInfo } from "./typesDefinition.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 * @typedef {import("./typesDefinition.js").MetaClassInfo} MetaClassInfo
 */

/**
 * @template T
 * @typedef {import("@gdacm/base-types").MetaConstructor<T>} MetaConstructor
 */

export class GrafanaItemClassBuilder {
    /**
     * @param {typeof GrafanaItem} cls
     */
    constructor(cls) {
        this.cls = cls;
    }

    /**
     * @param {typeof GrafanaItem} parent
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
     * @param {(instance: InstanceType<typeof GrafanaItem>) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => InstanceType<typeof GrafanaItem>} [option.onDefault]
     * @param {String} [option.typeName]
     * @return {this}
     */
    defineValue(key, type, option) {
        defineValue(this.cls, key, type, option);
        return this;
    }

    /**
     * @param {string} key 
     * @param {Function} type 
     * @param {Object} [option]
     * @param {string} [option.name]
     * @param {(instance: GrafanaItem) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => InstanceType<typeof GrafanaItem>} [option.onDefault]
     * @param {String} [option.typeName]
     * @return {this}
     */
    defineObject(key, type, option) {
        defineObject(this.cls, key, type, option);
        return this;
    }

    /**
     * @template {GrafanaItem} T
     * @param {string} key 
     * @param {MetaConstructor<T>} type 
     * @param {Object} [option]
     * @param {string} [option.name]
     * @param {(instance: GrafanaItem) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => T} [option.onDefault]
     * @param {String} [option.typeName]
     * @param {String} [option.setNew]
     * @return {this}
     */
    defineGrafanaObject(key, type, option) {
        defineGrafanaObject(this.cls, key, type, option);
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
     * @param {(instance: GrafanaItem) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => T} [option.onDefault]
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
     * @param {(instance: GrafanaItem) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => InstanceType<typeof GrafanaItem>} [option.onDefault]
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
        defineMemberInternal(this.cls, method, option);
        return this;
    }

    /**
     * @template {typeof GrafanaItem} T
     * @param {(instance: InstanceType<T>) => void} code
     * @return {this}
     */
    defineConstructor(code) {
        defineConstructor(this.cls, /** @type {(instance: GrafanaItem) => void} */ (code));
        return this;
    }

    /**
     * @param {string} name
     * @param {string} args
     * @param {Object} option
     * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
     * @param {Function} option.code
     * @return {this}
     */
    defineMethod(name, args, option) {
        defineMemberInternal(this.cls, `${name}${args}`, { ...option, name });
        return this;
    }

    /**
     * @template {typeof GrafanaItem} T
     * @param {string} name
     * @param {string} type
     * @param {Object} option
     * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
     * @param {(instance: InstanceType<T>) => any} [option.getter]
     * @param {(instance: InstanceType<T>, value: any) => void} [option.setter]
     * @return {this}
     */
    defineGetterSetter(name, type, option) {
        const getter = /** @type {(instance: GrafanaItem) => any} */ (option.getter);
        const setter = /** @type {(instance: GrafanaItem, value: any) => void} */ (option.setter);
        defineMemberInternal(this.cls, undefined, { ...option, getter, setter, name, getterSetterType: type });
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
 * @param {string} name
 * @param {typeof GrafanaItem} parent
 * @returns {GrafanaItemClassBuilder}
 */
export const defineGrafanaItemClass = (name, parent) => {
    const cls = class extends parent { };
    Object.defineProperty(cls, 'name', { value: name });
    return defineClass(cls)
        .setParent(parent);
}

/**
 * @param {typeof GrafanaItem} cls 
 */
export function defineClass(cls) {
    if (!hasType(cls)) {
        /** @type {Function|undefined} */
        let parent = Object.getPrototypeOf(cls);
        if (parent && !parent.name) {
            parent = undefined;
        }
        /** @type {((instance: GrafanaItem)=>void)[]} */
        let onInitsParent = [];
        if (parent && parent.name) {
            // @ts-ignore
            onInitsParent = getMetaClassInfo(parent).onInits;
        }
        /** @type {MetaClassInfo} */
        const metaClassInfo = {
            methods: [],
            onInits: [...onInitsParent],
            parentName: parent?.name,
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
