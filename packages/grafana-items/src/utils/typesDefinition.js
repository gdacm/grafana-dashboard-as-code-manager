import { GrafanaItem } from "../items/GrafanaItem.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 */

/**
 * @template T
 * @typedef {import("@gdacm/base-types").MetaConstructor<T>} MetaConstructor
 */

/**
 * @typedef {Object} MetaClassInfo
 * @property {string[]} methods - The methods defined for the class
 * @property {((instance: GrafanaItem)=>void)[]} onInits - The onInit functions defined for the class
 * @property {string|undefined} parentName - The name of the parent class
 * @property {Function|undefined} parent - The parent class constructor
 * @property {String[]} typeNamesToInclude - The type names to include in the generated type definition
 */

/**
 * @type {Map<typeof GrafanaItem, MetaClassInfo>}
 */
const types = new Map();

/**
 * @param {typeof GrafanaItem} cls
 * @returns {boolean} Whether the type exists in the map
 */
export const hasType = (cls) => types.has(cls);

/**
 * @param {typeof GrafanaItem} cls
 * @param {MetaClassInfo} metaClassInfo
 */
export const setTypeMetaClassInfo = (cls, metaClassInfo) => types.set(cls, metaClassInfo);

/**
 * 
 * @param {typeof GrafanaItem} cls
 * @returns {MetaClassInfo}
 */
export function getMetaClassInfo(cls) {
    const metaClassInfo = types.get(cls);
    if (metaClassInfo === undefined) {
        throw new Error(`MetaClassInfo not found for class ${cls.name}`);
    }
    return metaClassInfo;
}

/**
 * @param {typeof GrafanaItem} cls
 * @param {string} name 
 */
function hasPrototype(cls, name) {
    // @ts-ignore
    return cls.prototype[name] !== undefined;
}

/**
 * @param {typeof GrafanaItem} cls
 * @param {string} name 
 * @param {Function} value 
 */
function setPrototype(cls, name, value) {
    // @ts-ignore
    cls.prototype[name] = value;
}

/**
 * @param {typeof GrafanaItem} cls 
 * @param {string} name 
 * @param {(self: GrafanaItem) => any} getter 
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
 * @param {typeof GrafanaItem} cls 
 * @param {string} name 
 * @param {(instance: GrafanaItem, value: any) => void} setter 
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
 * @param {typeof GrafanaItem} cls 
 * @param {string} name 
 * @param {(self: GrafanaItem) => any} getter 
 * @param {(instance: GrafanaItem, value: any) => void} setter 
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
 * @param {typeof GrafanaItem} cls 
 * @param {string} key 
 * @param {Function} type
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {(instance: GrafanaItem) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => InstanceType<typeof GrafanaItem>} [option.onDefault]
 * @param {String} [option.typeName]
 */
export function defineValue(cls, key, type, option) {
    const metaClassInfo = getMetaClassInfo(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;
    if (metaClassInfo.typeNamesToInclude.includes(type.name) === false) {
        if (['String', 'Number', 'Boolean', 'Array', 'Object'].indexOf(type.name) === -1) {
            metaClassInfo.typeNamesToInclude.push(type.name);
        }
    }
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
 * @param {typeof GrafanaItem} cls 
 * @param {string} key 
 * @param {Function} type 
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {(instance: GrafanaItem) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => InstanceType<typeof GrafanaItem>} [option.onDefault]
 * @param {String} [option.typeName]
 */
export function defineObject(cls, key, type, option) {
    const metaClassInfo = getMetaClassInfo(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;
    if (metaClassInfo.typeNamesToInclude.includes(type.name) === false) {
        if (['String', 'Number', 'Boolean', 'Array', 'Object'].indexOf(type.name) === -1) {
            metaClassInfo.typeNamesToInclude.push(type.name);
        }
    }

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
 * @template {GrafanaItem} T
 * @param {typeof GrafanaItem} cls 
 * @param {string} key 
 * @param {MetaConstructor<T>} type
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {(instance: GrafanaItem) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => T} [option.onDefault]
 * @param {String} [option.typeName]
 */
export function defineGrafanaObject(cls, key, type, option) {
    const metaClassInfo = getMetaClassInfo(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;
    if (metaClassInfo.typeNamesToInclude.includes(type.name) === false) {
        if (['String', 'Number', 'Boolean', 'Array', 'Object'].indexOf(type.name) === -1) {
            metaClassInfo.typeNamesToInclude.push(type.name);
        }
    }

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
 * @template {GrafanaItem} T
 * @param {typeof GrafanaItem} cls
 * @param {string} key
 * @param {MetaConstructor<T>} type
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {string} [option.itemName]
 * @param {boolean} [option.setEmpty]
 * @param {(instance: GrafanaItem) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => T} [option.onDefault]
 */
export function defineArray(cls, key, type, option) {
    const metaClassInfo = getMetaClassInfo(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const itemName = option?.itemName ? option.itemName : (name.endsWith('s') ? name.slice(0, -1) : `${name}Item`);
    if (metaClassInfo.typeNamesToInclude.includes(type.name) === false) {
        if (type.name !== 'String' && type.name !== 'Number' && type.name !== 'Boolean') {
            metaClassInfo.typeNamesToInclude.push(type.name);
        }
    }
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
 * @param {typeof GrafanaItem} cls 
 * @param {string} key 
 * @param {Function} type 
 * @param {Object} [option]
 * @param {string} [option.name]
 * @param {string} [option.itemName]
 * @param {boolean} [option.setEmpty]
 * @param {(instance: GrafanaItem) => void} [option.onInit]
 * @param {(metaOptions: GenericMetaOptions) => InstanceType<typeof GrafanaItem>} [option.onDefault]
 */
export function defineBasicArray(cls, key, type, option) {
    const metaClassInfo = getMetaClassInfo(cls);
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const itemName = option?.itemName ? option.itemName : (name.endsWith('s') ? name.slice(0, -1) : `${name}Item`);
    if (metaClassInfo.typeNamesToInclude.includes(type.name) === false) {
        if (type.name !== 'String' && type.name !== 'Number' && type.name !== 'Boolean') {
            metaClassInfo.typeNamesToInclude.push(type.name);
        }
    }
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
                 * @template T
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
 * @template {typeof GrafanaItem} T
 * @param {typeof GrafanaItem} cls 
 * @param {string|undefined} method
 * @param {Object} [option]
 * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
 * @param {string} [option.name]
 * @param {Function} [option.code]
 * @param {(instance: GrafanaItem) => void} [option.constr]
 * @param {string} [option.getterSetterType]
 * @param {(self: GrafanaItem) => any} [option.getter]
 * @param {(self: GrafanaItem, value: any) => void} [option.setter]
 */
export function defineMemberInternal(cls, method, option) {
    const {
        typesToInclude,
        name,
        code,
        constr,
        getterSetterType,
        getter,
        setter,
    } = option || {};
    const metaClassInfo = getMetaClassInfo(cls);
    if (method !== undefined) {
        metaClassInfo.methods.push(method);
    }
    if (typesToInclude !== undefined) {
        for (const type of typesToInclude) {
            if (metaClassInfo.typeNamesToInclude.includes(type.name) === false) {
                metaClassInfo.typeNamesToInclude.push(type.name);
            }
        }
    }
    let codeCount = 0;
    if (code !== undefined) {
        codeCount++
    }
    if (constr !== undefined) {
        codeCount++
    }
    if (getter !== undefined || setter !== undefined) {
        codeCount++
    }
    if (codeCount > 1) {
        throw new Error(`You can only provide either code or constructor or getter/setter, not all. (codeCount:${codeCount})`);
    }
    if (code !== undefined && name === undefined) {
        throw new Error("You must provide a name when providing code.");
    }
    if (constr !== undefined && name !== undefined) {
        throw new Error("You cannot provide a name when providing constructor.");
    }
    if ((getter !== undefined || setter !== undefined) && name === undefined) {
        throw new Error("You must provide a name when providing getter or setter.");
    }
    if (codeCount == 1) {
        if (code !== undefined) {
            if (!name) {
                throw new Error("You must provide a name when providing code.");
            }

            setPrototype(cls, name,
                /**
                 * @this {GrafanaItem}
                 * @param  {...any} args
                 * @returns {any}
                 */
                function (...args) {
                    return code(this, ...args);
                }
            )
        }

        if (constr !== undefined) {
            metaClassInfo.onInits.push((instance) => constr(instance));
        }

        if (getter !== undefined && setter === undefined) {
            if (!name) {
                throw new Error("You must provide a name when providing getter or setter.");
            }
            setGetter(cls, name, getter);
            metaClassInfo.methods.push(`get ${name}(): ${getterSetterType};`)
        }

        if (getter === undefined && setter !== undefined) {
            if (!name) {
                throw new Error("You must provide a name when providing getter or setter.");
            }
            setSetter(cls, name, setter);
            metaClassInfo.methods.push(`set ${name}(value: ${getterSetterType});`)
        }

        if (getter !== undefined && setter !== undefined) {
            if (!name) {
                throw new Error("You must provide a name when providing getter or setter.");
            }
            setGetterAndSetter(cls, name, getter, setter);
            metaClassInfo.methods.push(`get ${name}(): ${getterSetterType};`)
            metaClassInfo.methods.push(`set ${name}(value: ${getterSetterType});`)
        }
    }
}

/**
 * @param {typeof GrafanaItem} cls 
 * @param {(instance: GrafanaItem) => void} code
 */
export function defineConstructor(cls, code) {
    defineMemberInternal(cls, 'constructor(metaOptions: GenericMetaOptions)', { constr: code });
}

/**
 * @param {typeof GrafanaItem} cls
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
    return [...types.keys()]
        .map(
            (cls) => [
                cls.name, getType(cls), getMetaClassInfo(cls).parentName, getMetaClassInfo(cls).typeNamesToInclude
            ]);
}
