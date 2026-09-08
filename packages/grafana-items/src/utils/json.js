import { GrafanaItem } from "../items/GrafanaItem.js";

/**
 * Sort the keys of an object for consistent JSON representation.
 * @param {{[key: String]: any}} obj - The object to sort.
 * @returns {{[key: String]: any}} - The object with sorted keys.
 */
const sortKeys = (obj) => {
    return Object.fromEntries(Object.keys(obj).sort().map((key) => [key, obj[key]]))
}

/**
 * Convert an object to a JSON representation, sorting keys for consistency.
 * @param {GrafanaItem|{[key: String]: any}|Array<GrafanaItem|{[key: String]: any}|Number|String|Boolean>|Number|String|Boolean|null|undefined} obj - The object to convert to JSON.
 * @returns {Object|null|undefined} - The JSON representation of the object with sorted keys.
 */
export const asJson = (obj) => {
    if (obj instanceof GrafanaItem) {
        return sortKeys(obj.asJson());
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => asJson(item));
    }

    if (Number.isInteger(obj) || typeof obj === 'string'  || typeof obj === 'number' || typeof obj === 'boolean' || obj === null || Number.isFinite(obj)) {
        return obj;
    }

    if (obj === null || obj === undefined) {
        return obj;
    }

    return sortKeys(obj);
}
