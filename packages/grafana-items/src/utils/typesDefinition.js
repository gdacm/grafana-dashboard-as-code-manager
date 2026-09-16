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
 * @param {MetaClassInfo<GrafanaItem,C>} metaClassInfo
 * @param {string} typeName
 */
const addTypeNameToInclude = (metaClassInfo, typeName) => {
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
const addTypesToInclude = (metaClassInfo, typesToInclude) => {
    if (typesToInclude !== undefined) {
        for (const type of typesToInclude) {
            addTypeNameToInclude(metaClassInfo, type.name);
        }
    }
}
/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} key 
 * @param {Function} type
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {(instance: C) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => unknown} [option.onDefault]
 * @param {String} [option.typeName]
 */
export function defineValue(cls, key, type, option) {
    const metaClassInfo = types.get(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;
    addTypeNameToInclude(metaClassInfo, type.name);
    const setName = `set${caseName}`;

    if (!hasPrototype(cls, setName)) {
        setPrototype(cls, setName,
            /**
             * @this GrafanaItem
             * @template T
             * @param {T} value
             * @returns {GrafanaItem}
             */
            function (value) {
                return this._setValue(key, value);
            }
        )
        metaClassInfo.methods.push(`${setName}(${name}: ${typeName}): this;`);
    }
    if (option?.onInit) {
        metaClassInfo.onInits.push(option.onInit);
    }
    if (option?.onDefault) {
        metaClassInfo.onInits.push(
            function (instance) {
                instance._setValue(key, option?.onDefault?.(instance.metaOptions));
            }
        );
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} key 
 * @param {Function} type 
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {(instance: C) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => unknown} [option.onDefault]
 * @param {String} [option.typeName]
 */
export function defineObject(cls, key, type, option) {
    const metaClassInfo = types.get(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;
    addTypeNameToInclude(metaClassInfo, type.name);

    const setName = `set${caseName}`;
    if (hasPrototype(cls, setName) === false) {
        setPrototype(cls, setName,
            /**
             * @this GrafanaItem
             * @template T
             * @param {T} value
             * @returns {GrafanaItem}
             */
            function (value) {
                return this._setObject(key, value);
            }
        );
        metaClassInfo.methods.push(`${setName}(${name}: ${typeName}): this;`);
    }

    const withName = `with${caseName}`;
    {
        setPrototype(cls, withName,
            /**
             * @this GrafanaItem
             * @template {GrafanaItem} T
             * @param {(item: T) => void} onWith
             * @returns {GrafanaItem}
             */
            function (onWith) {
                const item = this._getObject(key);
                if (item) {
                    onWith(item);
                }
                return this;
            }
        );
        metaClassInfo.methods.push(`with${caseName}(onWith: (item: ${typeName}) => void): this;`);
    }
    {
        setGetter(cls, name, (self) => self._getObject(key));
        metaClassInfo.methods.push(`get ${name}(): ${typeName};`);
    }

    if (option?.onInit) {
        metaClassInfo.onInits.push(option?.onInit);
    }
    if (option?.onDefault) {
        /**
         * @param {GrafanaItem} instance
         */
        const onInit = (instance) => {
            instance._setObject(key, option?.onDefault?.(instance.metaOptions));
        }
        metaClassInfo.onInits.push(onInit);
    }
}

/**
 * @template {GrafanaItem} C
 * @template {GrafanaItem} T
 * @param {MetaConstructor<C>} cls 
 * @param {string} key 
 * @param {MetaConstructor<T>} type
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {(instance: C) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => T} [option.onDefault]
 * @param {String} [option.typeName]
 */
export function defineGrafanaObject(cls, key, type, option) {
    const metaClassInfo = types.get(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;
    addTypeNameToInclude(metaClassInfo, type.name);

    const setName = `set${caseName}`;
    if (hasPrototype(cls, setName) === false) {
        setPrototype(cls, setName,
            /**
             * @this GrafanaItem
             * @param {T} value
             * @returns {GrafanaItem}
             */
            function (value) {
                return this._setGrafanaObject(key, type, value);
            }
        );
        metaClassInfo.methods.push(`${setName}(${name}: ${typeName}): this;`);
    }

    const setNewName = `setNew${caseName}`;
    {
        setPrototype(cls, setNewName,
            /**
             * @this GrafanaItem
             * @param {(item: T) => T} [onNewCreated]
             * @returns {GrafanaItem}
             */
            function (onNewCreated) {
                if (!onNewCreated) {
                    onNewCreated = (item) => item;
                }
                return this._setGrafanaObject(key, type, onNewCreated(new type(this.metaOptions)));
            }
        );
        metaClassInfo.methods.push(`${setNewName}(onNewCreated: ((item: ${typeName}) => ${typeName}) | undefined): this;`);
    }

    const withName = `with${caseName}`;
    {
        setPrototype(cls, withName,
            /**
             * @this GrafanaItem
             * @param {(item: T) => void} onWith
             * @returns {GrafanaItem}
             */
            function (onWith) {
                const item = this._getGrafanaObject(key, type);
                if (item) {
                    onWith(item);
                }
                return this;
            }
        );
        metaClassInfo.methods.push(`with${caseName}(onWith: (item: ${typeName}) => void): this;`);
    }
    {
        setGetter(cls, name, (self) => self._getGrafanaObject(key, type));
        metaClassInfo.methods.push(`get ${name}(): ${typeName};`);
    }

    if (option?.onInit) {
        metaClassInfo.onInits.push(option?.onInit);
    }
    if (option?.onDefault) {
        /**
         * @param {GrafanaItem} instance
         */
        const onInit = (instance) => {
            const x = option?.onDefault?.(instance.metaOptions)
            instance._setGrafanaObject(key, type, x);
        }
        metaClassInfo.onInits.push(onInit);
    }
}

/**
 * @template {GrafanaItem} C
 * @template {GrafanaItem} T
 * @param {MetaConstructor<C>} cls
 * @param {string} key
 * @param {MetaConstructor<T>} type
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {string} [option.itemName]
 * @param {boolean} [option.setEmpty]
 * @param {(instance: C) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => T[]} [option.onDefault]
 */
export function defineArray(cls, key, type, option) {
    const metaClassInfo = types.get(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const itemName = option?.itemName ? option.itemName : (name.endsWith('s') ? name.slice(0, -1) : `${name}Item`);
    addTypeNameToInclude(metaClassInfo, type.name);
    const caseItemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

    const initName = `init${caseName}`;
    {
        if (hasPrototype(cls, initName) === false) {
            setPrototype(cls, initName,
                /**
                 * @this GrafanaItem
                 * @returns {GrafanaItem}
                 */
                function () {
                    return this._initArray(key);
                }
            );
            metaClassInfo.methods.push(`init${caseName}(): this;`);
        }
    }
    {
        setGetter(cls, name, (self) => self._getArray(key));
        metaClassInfo.methods.push(`get ${name}(): ${type.name}[];`);
    }
    const addName = `add${caseItemName}`;
    {
        if (hasPrototype(cls, addName) === false) {
            setPrototype(cls, addName,
                /**
                 * @this GrafanaItem
                 * @param {T} item
                 * @returns {GrafanaItem}
                 */
                function (item) {
                    return this._addArrayItem(key, item);
                }
            );
            metaClassInfo.methods.push(`${addName}(${itemName}: ${type.name}): this;`);
        }
    }
    const addNewName = `addNew${caseItemName}`;
    {
        if (hasPrototype(cls, addNewName) === false) {
            setPrototype(cls, addNewName,
                /**
                 * @this GrafanaItem
                 * @param {(item: T) => T} onNewCreated
                 * @returns {GrafanaItem}
                 */
                function (onNewCreated) {
                    return this._addArrayItem(key, onNewCreated(new type(this.metaOptions)));
                }
            );
            metaClassInfo.methods.push(`${addNewName}(onNewCreated: (item: ${type.name}) => ${type.name}): this;`);
        }
    }
    const withName = `with${caseName}`;
    {
        setPrototype(cls, withName,
            /**
             * @this GrafanaItem
             * @param {(array: T[]) => void} onWith
             * @returns {GrafanaItem}
             */
            function (onWith) {
                const array = this._getArray(key);
                if (array) {
                    onWith(array);
                }
                return this;
            }
        );
        metaClassInfo.methods.push(`${withName}(onWith: (${name}: ${type.name}[]) => void): this;`);
    }
    if (option?.onInit) {
        metaClassInfo.onInits.push(option.onInit);
    }
    if (option?.onDefault) {
        metaClassInfo.onInits.push(
            (instance) => option.onDefault
                ?.(instance.metaOptions)
                ?.forEach(
                    item => instance._addArrayItem(key, item)
                )
        );
    }
    if (option?.setEmpty) {
        /**
         * @param {GrafanaItem} instance
         */
        const onInitArray = (instance) => {
            instance._initArray(key);
        }
        metaClassInfo.onInits.push(onInitArray);
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} key 
 * @param {Function} type 
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {string} [option.itemName]
 * @param {boolean} [option.setEmpty]
 * @param {(instance: C) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => Object[]} [option.onDefault]
 */
export function defineBasicArray(cls, key, type, option) {
    const metaClassInfo = types.get(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const itemName = option?.itemName ? option.itemName : (name.endsWith('s') ? name.slice(0, -1) : `${name}Item`);
    addTypeNameToInclude(metaClassInfo, type.name);
    const caseItemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

    const initName = `init${caseName}`;
    {
        if (hasPrototype(cls, initName) === false) {
            setPrototype(cls, initName,
                /**
                 * @this GrafanaItem
                 * @returns {GrafanaItem}
                 */
                function () {
                    return this._initArray(key);
                }
            );
            metaClassInfo.methods.push(`init${caseName}(): this;`);
        }
    }
    {
        setGetter(cls, name, (self) => self._getArray(key));
        metaClassInfo.methods.push(`get ${name}(): ${type.name}[];`);
    }
    const addName = `add${caseItemName}`;
    {
        if (hasPrototype(cls, addName) === false) {
            setPrototype(cls, addName,
                /**
                 * @this GrafanaItem
                 * @param {unknown} item
                 * @returns {GrafanaItem}
                 */
                function (item) {
                    return this._addArrayItem(key, item);
                }
            );
            metaClassInfo.methods.push(`${addName}(${itemName}: ${type.name}): this;`);
        }
    }
    const withName = `with${caseName}`;
    {
        setPrototype(cls, withName,
            /**
             * @this GrafanaItem
             * @template T
             * @param {(array: T[]) => void} onWith
             * @returns {GrafanaItem}
             */
            function (onWith) {
                const array = this._getArray(key);
                if (array) {
                    onWith(array);
                }
                return this;
            }
        );
        metaClassInfo.methods.push(`${withName}(onWith: (${name}: ${type.name}[]) => void): this;`);
    }
    if (option?.onInit) {
        metaClassInfo.onInits.push(option.onInit);
    }
    if (option?.onDefault) {
        metaClassInfo.onInits.push(
            (instance) => option.onDefault
                ?.(instance.metaOptions)
                ?.forEach(
                    item => instance._addArrayItem(key, item)
                )
        );
    }
    if (option?.setEmpty) {
        /**
         * @param {GrafanaItem} instance
         */
        const onInitArray = (instance) => {
            instance._initArray(key);
        }
        metaClassInfo.onInits.push(onInitArray);
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {(instance: C) => void} code
 */
export function defineConstructor(cls, code) {
    const constr = code;

    const metaClassInfo = types.get(cls);
    metaClassInfo.methods.push('constructor(metaOptions: GenericMetaOptions)');
    metaClassInfo.onInits.push((instance) => constr(instance));
}


/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} method
 * @param {Object} [option]
 * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
 */
export function defineMember(cls, method, option) {
    const { typesToInclude } = option || {};
    const metaClassInfo = types.get(cls);
    metaClassInfo.methods.push(method);
    addTypesToInclude(metaClassInfo, typesToInclude);
}


/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name
 * @param {string} args
 * @param {Object} option
 * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
 * @param {(instance: C, ...args: any[]) => any} option.code
 */
export const defineMethod = (cls, name, args, option) => {
    const {
        typesToInclude,
        code,
    } = option || {};

    const metaClassInfo = types.get(cls);
    metaClassInfo.methods.push(`${name}${args}`);
    addTypesToInclude(metaClassInfo, typesToInclude);

    if (code !== undefined) {
        if (!name) {
            throw new Error("You must provide a name when providing code.");
        }

        setPrototype(cls, name,
            /**
             * @this {C}
             * @param  {...any} args
             * @returns {any}
             */
            function (...args) {
                return code(this, ...args);
            }
        )
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name
 * @param {string} getterSetterType
 * @param {Object} option
 * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
 * @param {(self: C) => any} [option.getter]
 * @param {(self: C, value: any) => void} [option.setter]
 */
export function defineGetterSetter(cls, name, getterSetterType, option) {
    const {
        typesToInclude,
        getter,
        setter,
    } = option || {};
    const metaClassInfo = types.get(cls);
    addTypesToInclude(metaClassInfo, typesToInclude);

    if (getter !== undefined) {
        if (setter !== undefined) {
            setGetterAndSetter(cls, name, getter, setter);
        } else {
            setGetter(cls, name, getter);
        }
    } else {
        if (setter !== undefined) {
            setSetter(cls, name, setter);
        } else {
            throw new Error("You must provide either a getter or a setter.");
        }
    }

    if (getter !== undefined) {
        metaClassInfo.methods.push(`get ${name}(): ${getterSetterType};`)
    }

    if (setter !== undefined) {
        metaClassInfo.methods.push(`set ${name}(value: ${getterSetterType});`)
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls
 * @returns {string}
 */
export function getType(cls) {
    const clsName = cls.name;
    const metaClassInfo = types.get(cls);

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
    return types.keys()
        .map(
            (cls) => [
                cls.name, getType(cls), types.get(cls).parentName, types.get(cls).typeNamesToInclude
            ]);
}
