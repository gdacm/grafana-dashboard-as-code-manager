/**
 * 
 * @param {{[header: String]: String}} headers
 * @param {Object} [options] 
 * @param {String} [options.token] - The API token for authentication
 * @param {String} [options.login] - The login for basic authentication (not supported)
 * @param {String} [options.password] - The password for basic authentication (not supported)
 */
const ensureAuthentication = (headers, options) => {
    if (options?.token) {
        headers['Authorization'] = `Bearer ${options.token}`;
    }
    if (options?.login !== undefined || options?.password !== undefined) {
        throw new Error('Basic authentication is not supported (yet?). Please use a token instead as it\'s a more secure method.');
    }
}

/**
 * @param {Response} response 
 */
const ensureResponseOk = (response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

/**
 * 
 * @param {String} url 
 * @param {Object|null|undefined} data 
 * @param {{[header: String]: String}} headers 
 * @param {String} method 
 * @param {Object} [options] 
 * @returns {Promise<Object>}
 */
const processQuery = async (url, data, headers, method, options) => {
    ensureAuthentication(headers, options);
    const extra = data ? { body: JSON.stringify(data) } : {};
    const response = await fetch(url, {
        method: method,
        headers: headers,
        ...extra,
    });
    ensureResponseOk(response);
    return response.json();
}

/**
 * @param {String} url 
 * @param {Object} [options] 
 * @returns {Promise<Object>}
 */
const getJson = async (url, options) => {
    return processQuery(url, null, {}, 'GET', options);
}

/**
 * @param {String} url 
 * @param {Object|null|undefined} [data]
 * @param {Object} [options] 
 * @returns {Promise<Object>}
 */
const postJson = async (url, data, options) => {
    return processQuery(url, data, { 'Content-Type': 'application/json' }, 'POST', options);
}


/**
 * @param {String} url 
 * @param {Object|null|undefined} [data]
 * @param {Object} [options] 
 * @returns {Promise<Object>}
 */
const putJson = async (url, data, options) => {
    return processQuery(url, data, { 'Content-Type': 'application/json' }, 'PUT', options);
}

export { getJson, postJson, putJson };