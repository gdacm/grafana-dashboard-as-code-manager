import { fileExists, readJsonFile, readYamlFile } from "./utils/io.js";

/**
 * @typedef {import("@gdacm/base-types").Info} Info
 * @typedef {import("@gdacm/base-types").GenericMetaOptions} GenericMetaOptions
 * @typedef {import("@gdacm/base-types").GenericOptions} GenericOptions
 */

/**
 * @template {GenericOptions} T
 * @typedef {import("@gdacm/base-types").MetaOptions<T>} MetaOptions
 */

/**
 * Get info from environment variables.
 * - GDM_TEST_NAME: String (-> info.testName)
 * - GDM_API_URL: String (-> info.apiUrl)
 * - GDM_API_TOKEN: String (-> info.apiToken)
 * - GDM_WRITE_ON_DISK: Boolean (-> info.writeOnDisk)
 * - GDM_CREATE_ON_GRAFANA: Boolean (-> info.createOnGrafana)
 * - GDM_INCLUDE_*: String (-> info.includes)
 * @type {Array<{
 *   name: String, 
 *   prefix?: String,
 *   key: String, 
 *   type: Function, 
 *   subtype?: Function,
 * }>}
 */
const envvars = [
    {
        name: 'GDM_TEST_NAME',
        key: 'testName',
        type: String,
    },
    {
        name: 'GDM_API_URL',
        key: 'apiUrl',
        type: String,
    },
    {
        name: 'GDM_API_TOKEN',
        key: 'apiToken',
        type: String,
    },
    {
        name: 'GDM_WRITE_ON_DISK',
        key: 'writeOnDisk',
        type: Boolean,
    },
    {
        name: 'GDM_CREATE_ON_GRAFANA',
        key: 'createOnGrafana',
        type: Boolean,
    },
    {
        name: 'GDM_INCLUDE',
        prefix: 'GDM_INCLUDE_',
        key: 'includes',
        type: Array,
        subtype: String,
    }
]


/**
 * @param  {...(Info|undefined)} infos 
 * @returns {Info}
 */
export const mergeInfos = (...infos) => {
    /** @type{Info} */
    let result = {};
    for (const info of infos) {
        result = {
            ...result,
            ...info,
            includes: [
                ...(result?.includes ?? []),
                ...(info?.includes ?? []),
            ]
        };
    }
    return result;
};


/**
 * @returns {Info}
 */
export const getEnvVarsInfo = () => {
    /**
     * @type {Record<String, String|Number|Boolean|Array<String|Number|Boolean>>}
     */
    const info = {};
    envvars.forEach(
        (envvar) => {
            const stringValue = process.env[envvar.name];
            if (stringValue !== undefined) {
                if (envvar.type === Number) {
                    info[envvar.key] = Number(stringValue);
                } else if (envvar.type === Boolean) {
                    info[envvar.key] = (stringValue === 'true') || (stringValue === '1');
                } else if (envvar.type === String) {
                    info[envvar.key] = stringValue;
                } else if (envvar.type === Array) {
                    if (!info[envvar.key]) {
                        info[envvar.key] = [];
                    }
                    /** @type{Array<String|Number|Boolean>} */
                    // @ts-ignore
                    const array = info[envvar.key];
                    if (envvar.subtype === String) {
                        array.push(stringValue);
                    } else if (envvar.subtype === Number) {
                        array.push(Number(stringValue));
                    } else if (envvar.subtype === Boolean) {
                        array.push((stringValue === 'true') || (stringValue === '1'));
                    }
                }
            }
            if (envvar.prefix) {
                const prefix = envvar.prefix;
                const envsThatStartWith = Object.keys(process.env).filter(key => key.startsWith(prefix)).sort();

                if (envvar.type === Array && envsThatStartWith.length > 0) {
                    for (const envName of envsThatStartWith) {
                        const stringValue = process.env[envName];
                        if (stringValue !== undefined) {
                            if (!info[envvar.key]) {
                                info[envvar.key] = [];
                            }
                            /** @type{Array<String|Number|Boolean>} */
                            // @ts-ignore
                            const array = info[envvar.key];
                            if (envvar.subtype === String) {
                                array.push(stringValue);
                            } else if (envvar.subtype === Number) {
                                array.push(Number(stringValue));
                            } else if (envvar.subtype === Boolean) {
                                array.push((stringValue === 'true') || (stringValue === '1'));
                            }
                        }
                    }
                }
            }
        }
    );
    return info;
};

/**
 * @param {String} folderPath
 * @param {String} infoPath 
 * @returns {Promise<Info[]|undefined>}
 */
const getInfoFromFolderAndPath = async (folderPath, infoPath) => {
    const infoFilePath = `${folderPath}/${infoPath}`;
    const result = []
    for (const { ext, readFunc } of [
        {
            ext: 'json',
            readFunc: readJsonFile,
        },
        {
            ext: 'yaml',
            readFunc: readYamlFile,

        },
        {
            ext: 'yml',
            readFunc: readYamlFile,
        },
    ]) {
        const filePath = `${infoFilePath}.${ext}`;
        if (await fileExists(filePath)) {
            const info = await readFunc(filePath);
            if (info) {
                result.push(info);
            }
        }
    }
    return result.length > 0 ? result : undefined;
};

/**
 * @param {String|String[]} folderPaths 
 * @param {String} infoPath 
 * @returns {Promise<Info[]>}
 */
const getInfosFromFoldersAndPaths = async (folderPaths, infoPath) => {
    const paths = Array.isArray(folderPaths) ? folderPaths : [folderPaths];
    const infos = [];
    for (const path of paths) {
        const infosFromPath = await getInfoFromFolderAndPath(path, infoPath);
        if (infosFromPath) {
            infos.push(...infosFromPath);
        }
    }
    return infos;
}

/**
 * @param {String|String[]} folderPaths 
 * @returns {Promise<Info>}
 */
const getInfoFromFolders = async (folderPaths) => {
    let infoResult = {};
    for (const info of await getInfosFromFoldersAndPaths(folderPaths, 'info')) {
        infoResult = mergeInfos(infoResult, info);
    }
    return infoResult;
}


/**
 * @template T
 * @param {String} key 
 * @param {GenericMetaOptions} metaOptions
 * @param {T} [defaultValue]
 * @returns {T}
 */
export const getFromOptionsOrInfo = (key, metaOptions, defaultValue) => {
    const value = metaOptions?.[key] ?? metaOptions?.info?.[key] ?? defaultValue;
    return value;
};

/**
 * @template {GenericOptions} T
 * @param  {...GenericOptions|undefined} metaOptionsList 
 * @returns {MetaOptions<T>}
 */
export const mergeOptions = (...metaOptionsList) => {
    let mergedMetaOptions = /** @type {MetaOptions<T>} */ ({});
    metaOptionsList.forEach(metaOptions => {
        if (metaOptions) {
            mergedMetaOptions = { ...mergedMetaOptions, ...metaOptions, info: mergeInfos(mergedMetaOptions?.info, metaOptions?.info) };
        }
    });
    return mergedMetaOptions;
};

/**
 * @param {Info|Info[]|undefined} infoCode
 * @param {String|String[]} localFolderPaths 
 */
export const getInfo = async (infoCode, localFolderPaths) => {
    const infoLocal = await getInfoFromFolders(localFolderPaths);
    const infoEnvVars = getEnvVarsInfo();
    const infosCode = Array.isArray(infoCode) ? infoCode : (infoCode ? [infoCode] : []);
    let infoIntermediate = mergeInfos(...infosCode, infoLocal, infoEnvVars);
    /** @type{Set<String>} */
    const included = new Set()
    const includes = infoIntermediate.includes;
    if (includes) {
        let hasNewIncludes = true;
        while (hasNewIncludes) {
            hasNewIncludes = false;
            for (const include of includes) {
                if (!included.has(include)) {
                    const infosFromIncludes = await getInfosFromFoldersAndPaths(localFolderPaths, include);
                    for (const infoFromInclude of infosFromIncludes) {
                        infoIntermediate = mergeInfos(infoIntermediate, infoFromInclude);
                        hasNewIncludes = true;
                    }
                    included.add(include);
                }
            }
        }
    }
    return infoIntermediate;
}