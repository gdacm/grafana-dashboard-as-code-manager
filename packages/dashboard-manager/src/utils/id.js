import crypto from 'crypto';

/**
 * 
 * @param {string} input 
 * @returns {string}
 */
const getHash = (input) => {
    return crypto.createHash('sha256').update(input).digest('hex');
}

/**
 * 
 * @param {string|undefined} vid
 * @returns {string|undefined} The Grafana ID (40 characters) or undefined if vid is undefined
 */
const getGrafanaId = (vid) => {
    if (!vid) {
        return undefined
    }
    if (vid.length <= 40) {
        return vid;
    }
    return getHash(vid).substring(0, 40);
}

/**
 * @param {String} str 
 * @returns {String} The string without diacritics
 */
const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * @param {string} input
 * @returns {string} The slugified version of the input
 */
const getSlug = (input) => {
    return removeDiacritics(input).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const segmentString = new Intl.Segmenter("fr", {
  granularity: "grapheme",
});

/**
 * @param {String} str
 * @returns {String}
 */
const getFirstEmoji = (str) => {
    const emojis = [...segmentString.segment(str)].filter(({ segment }) => /\p{Extended_Pictographic}/u.test(segment));
    return emojis[0]?.segment;
}

/**
 * @param {string} str 
 * @param {string} newEmoji 
 * @returns {string} The string with the first emoji replaced by the new emoji
 */
const replaceFirstEmojiWithOtherEmoji = (str, newEmoji) => {
    const firstEmoji = getFirstEmoji(str);
    if (firstEmoji) {
        return str.replace(firstEmoji, newEmoji);
    }
    return str;
}

/**
 * @param {String} str 
 * @param {String} newEmoji 
 * @returns {String}
 */
const replaceFirstEmojiWithOtherEmojiOrAddOne = (str, newEmoji) => {
    const x =  getFirstEmoji(str)
    if (x) {
        return str.replace(x, newEmoji);
    } else {
        return `${newEmoji} ${str}`;
    }
}

/**
 * @param {String} str 
 * @param {String} newEmoji 
 * @returns {String}
 */
const addEmojiIfNoEmojiPresent = (str, newEmoji) => {
    const x =  getFirstEmoji(str)
    if (x) {
        return str;
    } else {
        return `${newEmoji} ${str}`;
    }
}

export { getGrafanaId, getSlug, replaceFirstEmojiWithOtherEmoji, replaceFirstEmojiWithOtherEmojiOrAddOne, addEmojiIfNoEmojiPresent, getFirstEmoji };