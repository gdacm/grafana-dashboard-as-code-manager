import { GrafanaItem } from "../items/GrafanaItem.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
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
 */
export function defineClass(cls) {
    if (!types.has(cls)) {
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
        types.set(cls, metaClassInfo);
    }
    return new GrafanaItemClassBuilder(cls);
}

/**
 * 
 * @param {typeof GrafanaItem} cls
 * @returns {MetaClassInfo}
 */
function getMetaClassInfo(cls) {
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
function defineValue(cls, key, type, option) {
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
 * @param {Boolean} [option.setNew]
 * @param {String} [option.typeName]
 */
function defineObject(cls, key, type, option) {
    const metaClassInfo = getMetaClassInfo(cls);
    const name = option?.name ? option.name : key;
    const setNew = option?.setNew ?? false;
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

    const setNewName = `setNew${caseName}`;
    if (hasPrototype(cls, setNewName) === false && setNew) {
        setPrototype(cls, setNewName,
            /**
             * @this GrafanaItem
             * @template {GrafanaItem} T
             * @param {(item: T) => T} [onNewCreated]
             * @returns {GrafanaItem}
             */
            function (onNewCreated) {
                if (!onNewCreated) {
                    onNewCreated = (item) => item;
                }
                // @ts-ignore
                return this._setObject(key, onNewCreated(new type(this.metaOptions)));
            }
        );
        metaClassInfo.methods.push(`${setNewName}(onNewCreated: ((item: ${typeName}) => ${typeName}) | undefined): this;`);
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
function defineArray(cls, key, type, option) {
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
    const addNewName = `addNew${caseItemName}`;
    {
        if (hasPrototype(cls, addNewName) === false) {
            setPrototype(cls, addNewName,
                /**
                 * @this GrafanaItem
                 * @template T
                 * @param {(item: T) => T} onNewCreated
                 * @returns {GrafanaItem}
                 */
                function (onNewCreated) {
                    // @ts-ignore
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
function defineMemberInternal(cls, method, option) {
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
function defineConstructor(cls, code) {
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
     * @param {Boolean} [option.setNew]
     * @param {String} [option.typeName]
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
     * @param {string} [option.itemName]
     * @param {boolean} [option.setEmpty]
     * @param {(instance: GrafanaItem) => void} [option.onInit]
     * @param {(metaOptions: GenericMetaOptions) => InstanceType<typeof GrafanaItem>} [option.onDefault]
     * @return {this}
     */
    defineArray(key, type, option) {
        defineArray(this.cls, key, type, option);
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
