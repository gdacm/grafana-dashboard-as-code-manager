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

class InfluxDb2QueryBuilder {
    constructor() {
        /**
         * @type {string[]}
         */
        this._parts = [];
    }

    /**
     * @param {string} bucket
     * @returns {InfluxDb2QueryBuilder}
     */
    from(bucket) {
        this._parts.push(`from(bucket: "${bucket}")`);
        return this;
    }

    /**
     * @param {String} start
     * @param {String} stop
     * @returns {InfluxDb2QueryBuilder}
     */
    range(start, stop) {
        this._parts.push(`range(start: ${start}, stop: ${stop})`);
        return this;
    }

    /**
     * @returns {InfluxDb2QueryBuilder}
     */
    rangeTimeRange() {
        return this.range('v.timeRangeStart', 'v.timeRangeStop');
    }

    /**
     * @param {String} name
     * @param {String} predicate
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    filter(name, predicate, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`filter(fn: (${name}) => ${predicate})`);
        return this;
    }

    /**
     * @param {String} propertyName
     * @param {String} value
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    filterPropertyIs(propertyName, value, options) {
        return this.filter('r', `r["${propertyName}"] == "${value}"`, options);
    }

    /**
     * @param {String} propertyName
     * @param {String} operator
     * @param {String} value
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    filterPropertyOperator(propertyName, operator, value, options) {
        return this.filter('r', `r["${propertyName}"] ${operator} ${value}`, options);
    }

    /**
     * @param {String} propertyName
     * @param {String[]} values
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    filterPropertyIsIn(propertyName, values, options) {
        return this.filter('r', values.map((value) => `r["${propertyName}"] == "${value}"`).join(' or '), options);
    }
    
    /**
     * @param {String} propertyName
     * @param {String} set
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    filterContainsSet(propertyName, set, options) {
        return this.filter('r', `contains(value: r["${propertyName}"], set: ${set})`, options);
    }

    /**
     * @param {String[]} columns
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder} 
     */
    keepColumns(columns, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`keep(columns: ${JSON.stringify(columns)})`);
        return this;
    }

    /**
     * @param {String[]} columns
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder} 
     */
    groupBy(columns, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`group(columns: ${JSON.stringify(columns)})`);
        return this;
    }

    /**
     * @param {String[]} columns
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder} 
     */
    sort(columns, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`sort(columns: ${JSON.stringify(columns)})`);
        return this;
    }

    /**
     * @param {String} column
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder} 
     */
    distinct(column, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`distinct(column: "${column}")`);
        return this;
    }

    /**
     * 
     * @param {String} every
     * @param {String} fn
     * @param {Boolean} createEmpty
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    aggregateWindow(every, fn, createEmpty, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`aggregateWindow(every: ${every}, fn: ${fn}, createEmpty: ${createEmpty})`);
        return this;
    }

    /**
     * @param {String} unit
     * @param {Boolean} nonNegative 
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    derivative(unit, nonNegative, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        this._parts.push(`derivative(unit: ${unit}, nonNegative: ${nonNegative})`);
        return this;
    }

    /**
     * @param {String} [name]
     * @param {Object} [options]
     * @param {Boolean} [options.activate]
     * @returns {InfluxDb2QueryBuilder}
     */
    yield(name, options) {
        if (checkActivate(options) === false) {
            return this;
        }
        if (name === undefined) {
            this._parts.push(`yield()`);
        } else {
            this._parts.push(`yield(name: "${name}")`);
        }
        return this;
    }

    /**
     * @returns {String}    
     */
    asString() {
        return this._parts.join('\n  |> ');
    }

}

export { InfluxDb2QueryBuilder }