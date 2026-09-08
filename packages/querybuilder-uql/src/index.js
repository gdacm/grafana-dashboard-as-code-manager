/**
 * @param {Object} [options]
 * @param {Boolean} [options.activate]
 * @returns {Boolean}
 */
const checkActivate = (options) => {
    if (options && options.activate === false) {
        return false;
    }
    return true;
}

export class UqlQueryBuilder {
    constructor() {
        /**
         * @type {string[]}
         */
        this._parts = [];
    }
    /**
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {UqlQueryBuilder}
     */
    parseJson(options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`parse-json`);
        return this;
    }
    
    /**
     * @param {String} name
     * @param {Object} [options]
     * @param {Boolean} [options.activate] 
     * @returns {UqlQueryBuilder}
     */
    scope(name, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`scope "${name}"`);
        return this;
    }

    /**
     * @param {String} name
     * @param {String} expression
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {UqlQueryBuilder}
     */
    extend(name, expression, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`extend "${name}"=${expression}`);
        return this;
    }

    /**
     * @param {String[]} names
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {UqlQueryBuilder}
     */
    project(names, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`project ${names.map(name => `"${name}"`).join(', ')}`);
        return this;
    }

    /**
     * @param {(String|{name: String, direction: String})[]} names
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {UqlQueryBuilder}
     */
    orderBy(names, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        const items = names.map(name => {
            if (typeof name === 'string') {
                return `"${name}" asc`;
            } else {
                return `"${name.name}" ${name.direction}`;
            }
        });
        this._parts.push(`order by ${items.join(', ')}`);
        return this;
    }

    /**
     * @returns {String}
     */
    asString() {
        return this._parts.join('\n  | ');
    }
}