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
     * Execute code based on a condition. If the condition is true, execute the code block, otherwise execute the elseCode block if provided.
     * 
     * @param {boolean} condition The condition to evaluate
     * @param {(item: this) => this} code The code to execute if the condition is true
     * @param {(item: this) => this} [elseCode] The code to execute if the condition is false
     * @example
     * instance
     *     .withCond(
     *         someBoolean, 
     *         (instance) => instance
     *             .someFluentMethod()
     *             .anotherFluentMethod()
     * )
     * @example
     * instance
     *     .withCond(
     *         someBoolean, 
     *         (instance) => instance
     *             .someFluentMethod()
     *             .anotherFluentMethod(),
     *         (instance) => instance
     *             .alternativeFluentMethod()
     * )
     * @returns {this} The current instance of the class
     */
    withCond(condition, code, elseCode) {
        if (condition) {
            return code(this);
        } else if (elseCode) {
            return elseCode(this);
        }
        return this;
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