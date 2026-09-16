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
 * @typedef {{
 *   methods: string[],
 *   onInits: ((instance: C)=>void)[],
 *   parentName: string|undefined,
 *   parent: MetaConstructor<T>|undefined,
 *   typeNamesToInclude: string[]
 * }} MetaClassInfo
 */

/**
 * @template {Object} T
 */
export class MetaClassRegistry {
    constructor() {
        /**
         * @type {Map<MetaConstructor<T>, unknown>}
         */
        this.types = new Map();
    }

    /**
     * @template {T} C
     * @param {MetaConstructor<C>} cls
     * @param {MetaClassInfo<T,C>} info
     */
    set(cls, info) {
        this.types.set(cls, info);
    }

    /**
     * @template {T} C
     * @param {MetaConstructor<C>} cls
     * @returns {MetaClassInfo<T,C>}
     */
    get(cls) {
        const info = this.types.get(cls);

        if (info === undefined) {
            throw new Error(`MetaClassInfo not found for class ${cls.name}`);
        }

        return /** @type {MetaClassInfo<T,C>} */ (info);
    }

    /**
     * @template {T} C
     * @param {MetaConstructor<C>} cls
     * @returns {boolean}
     */
    has(cls) {
        return this.types.has(cls);
    }


    /**
     * @returns {MetaConstructor<T>[]} The keys of the types map
     */
    keys() {
        return [...this.types.keys()];
    }
}
