import { GrafanaItem } from "../items/GrafanaItem.js";
import { addOnInit, addSignature, addTypeNameToInclude, addTypesToInclude, setGetterAndSetterWithSignature, setGetterWithSignature, setPrototypeWithSignature, setSetterWithSignature } from "./typesReference.js";

/**
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 */

/**
 * @template T
 * @typedef {import("@gdacm/base-types").MetaConstructor<T>} MetaConstructor
 */

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
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;

    addTypeNameToInclude(cls, type.name);

    setGetterWithSignature(cls, name, (self) => self._getValue(key), typeName);

    setPrototypeWithSignature(
        cls,
        `set${caseName}`,
        `(${name}: ${typeName}): this;`,
        /**
         * @this C
         * @template T
         * @param {T} value
         * @returns {C}
         */
        function (value) {
            return this._setValue(key, value);
        }
    )

    addOnInit(cls, option?.onInit);

    if (option?.onDefault) {
        addOnInit(cls, (instance) => instance._setValue(key, option?.onDefault?.(instance.metaOptions)));
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
export function defineBasicObject(cls, key, type, option) {
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;

    addTypeNameToInclude(cls, type.name);

    setPrototypeWithSignature(
        cls,
        `set${caseName}`,
        `(${name}: ${typeName}): this;`,
        /**
         * @this C
         * @template T
         * @param {T} value
         * @returns {C}
         */
        function (value) {
            return this._setObject(key, value);
        }
    );

    setPrototypeWithSignature(
        cls,
        `with${caseName}`,
        `(onWith: (item: ${typeName}) => void): this;`,
        /**
         * @this C
         * @template {GrafanaItem} T
         * @param {(item: T) => void} onWith
         * @returns {C}
         */
        function (onWith) {
            const item = this._getObject(key);
            if (item) {
                onWith(item);
            }
            return this;
        }
    );

    setGetterWithSignature(cls, name, (self) => self._getObject(key), typeName);

    addOnInit(cls, option?.onInit);

    if (option?.onDefault) {
        addOnInit(cls, (instance) => instance._setObject(key, option?.onDefault?.(instance.metaOptions)))
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
export function defineObject(cls, key, type, option) {
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const typeName = option?.typeName ? option.typeName : type.name;

    addTypeNameToInclude(cls, type.name);

    setPrototypeWithSignature(
        cls,
        `set${caseName}`,
        `(${name}: ${typeName}): this;`,
        /**
         * @this C
         * @param {T} value
         * @returns {C}
         */
        function (value) {
            return this._setGrafanaObject(key, type, value);
        }
    );

    setPrototypeWithSignature(
        cls,
        `setNew${caseName}`,
        `(onNewCreated: ((item: ${typeName}) => ${typeName}) | undefined): this;`,
        /**
         * @this C
         * @param {(item: T) => T} [onNewCreated]
         * @returns {C}
         */
        function (onNewCreated) {
            if (!onNewCreated) {
                onNewCreated = (item) => item;
            }
            return this._setGrafanaObject(key, type, onNewCreated(new type(this.metaOptions)));
        }
    );

    setPrototypeWithSignature(
        cls,
        `with${caseName}`,
        `(onWith: (item: ${typeName}) => void): this;`,
        /**
         * @this C
         * @param {(item: T) => void} onWith
         * @returns {C}
         */
        function (onWith) {
            const item = this._getGrafanaObject(key, type);
            if (item) {
                onWith(item);
            }
            return this;
        }
    )

    setGetterWithSignature(cls, name, (self) => self._getGrafanaObject(key, type), typeName);

    addOnInit(cls, option?.onInit);

    if (option?.onDefault) {
        addOnInit(cls, (instance) => {
            const x = option?.onDefault?.(instance.metaOptions)
            instance._setGrafanaObject(key, type, x);
        });
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
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const itemName = option?.itemName ? option.itemName : (name.endsWith('s') ? name.slice(0, -1) : `${name}Item`);
    const caseItemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

    addTypeNameToInclude(cls, type.name);

    setPrototypeWithSignature(
        cls,
        `init${caseName}`,
        `(): this;`,
        /**
         * @this C
         * @returns {C}
         */
        function () {
            return this._initArray(key);
        }
    )

    setGetterWithSignature(cls, name, (self) => self._getArray(key), `${type.name}[]`);

    setPrototypeWithSignature(
        cls,
        `add${caseItemName}`,
        `(${itemName}: ${type.name}): this;`,
        /**
         * @this C
         * @param {T} item
         * @returns {C}
         */
        function (item) {
            return this._addArrayItem(key, item);
        }
    );

    setPrototypeWithSignature(
        cls,
        `addNew${caseItemName}`,
        `(onNewCreated: (item: ${type.name}) => ${type.name}): this;`,
        /**
         * @this C
         * @param {(item: T) => T} onNewCreated
         * @returns {C}
         */
        function (onNewCreated) {
            return this._addArrayItem(key, onNewCreated(new type(this.metaOptions)));
        }
    );

    setPrototypeWithSignature(
        cls,
        `with${caseName}`,
        `(onWith: (${name}: ${type.name}[]) => void): this;`,
        /**
         * @this C
         * @param {(array: T[]) => void} onWith
         * @returns {C}
         */
        function (onWith) {
            const array = this._getArray(key);
            if (array) {
                onWith(array);
            }
            return this;
        }
    )

    addOnInit(cls, option?.onInit);

    if (option?.onDefault) {
        addOnInit(cls, (instance) => option.onDefault
            ?.(instance.metaOptions)
            ?.forEach(
                item => instance._addArrayItem(key, item)
            )
        );
    }

    if (option?.setEmpty) {
        addOnInit(cls, (instance) => instance._initArray(key));
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
    const name = option?.name ? option.name : key;
    const caseName = name.charAt(0).toUpperCase() + name.slice(1);
    const itemName = option?.itemName ? option.itemName : (name.endsWith('s') ? name.slice(0, -1) : `${name}Item`);
    const caseItemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

    addTypeNameToInclude(cls, type.name);

    setPrototypeWithSignature(
        cls,
        `init${caseName}`,
        `(): this;`,
        /**
         * @this C
         * @returns {C}
         */
        function () {
            return this._initArray(key);
        }
    )

    setGetterWithSignature(cls, name, (self) => self._getArray(key), `${type.name}[]`);

    setPrototypeWithSignature(
        cls,
        `add${caseItemName}`,
        `(${itemName}: ${type.name}): this;`,
        /**
         * @this C
         * @template T
         * @param {T} item
         * @returns {C}
         */
        function (item) {
            return this._addArrayItem(key, item);
        }
    )

    setPrototypeWithSignature(
        cls,
        `with${caseName}`,
        `(onWith: (${name}: ${type.name}[]) => void): this;`,
        /**
         * @this C
         * @template T
         * @param {(array: T[]) => void} onWith
         * @returns {C}
         */
        function (onWith) {
            const array = this._getArray(key);
            if (array) {
                onWith(array);
            }
            return this;
        }
    )

    addOnInit(cls, option?.onInit);

    if (option?.onDefault) {
        addOnInit(cls, (instance) => option.onDefault
            ?.(instance.metaOptions)
            ?.forEach(
                item => instance._addArrayItem(key, item)
            )
        )
    }

    if (option?.setEmpty) {
        addOnInit(cls, (instance) => instance._initArray(key));
    }
}

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {(instance: C) => void} code
 */
export function defineConstructor(cls, code) {
    addSignature(cls, 'constructor(metaOptions: GenericMetaOptions)');
    addOnInit(cls, (instance) => code(instance))
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
    addSignature(cls, method);
    addTypesToInclude(cls, typesToInclude);
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

    addTypesToInclude(cls, typesToInclude);

    setPrototypeWithSignature(
        cls,
        name,
        args,
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

/**
 * @template {GrafanaItem} C
 * @param {MetaConstructor<C>} cls 
 * @param {string} name
 * @param {string} typeName
 * @param {Object} option
 * @param {(typeof GrafanaItem)[]} [option.typesToInclude]
 * @param {(self: C) => any} [option.getter]
 * @param {(self: C, value: any) => void} [option.setter]
 */
export function defineGetterSetter(cls, name, typeName, option) {
    const {
        typesToInclude,
        getter,
        setter,
    } = option || {};

    addTypesToInclude(cls, typesToInclude);

    if (getter !== undefined) {
        if (setter !== undefined) {
            setGetterAndSetterWithSignature(cls, name, getter, setter, typeName);
        } else {
            setGetterWithSignature(cls, name, getter, typeName);
        }
    } else {
        if (setter !== undefined) {
            setSetterWithSignature(cls, name, setter, typeName);
        } else {
            throw new Error("You must provide either a getter or a setter.");
        }
    }
}

