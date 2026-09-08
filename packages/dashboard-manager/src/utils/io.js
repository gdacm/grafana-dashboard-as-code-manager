import { load as yamlLoad, dump as yamlDump } from 'js-yaml';
import fs from 'fs/promises';
import path from 'path';

/**
 * 
 * @param {string} dir 
 */
export const ensurePathExists = async (dir) => {
    try {
        await fs.access(dir);
    } catch (err) {
        await fs.mkdir(dir, { recursive: true });
    }
}

/**
 * Checks if a file exists.
 * 
 * @param {string} filePath 
 * @returns {Promise<boolean>} True if the file exists, false otherwise
 */
export const fileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch (err) {
        return false;
    }
}

/**
 * Writes a JavaScript object to a YAML file.
 * 
 * @param {string} filePath 
 * @param {Object} data 
 */
export const writeYamlFile = async (filePath, data) => {
    const yamlString = yamlDump(data);
    await ensurePathExists(path.dirname(filePath));
    await fs.writeFile(filePath, yamlString);
}

/**
 * Writes a JavaScript object to a JSON file.
 * 
 * @param {string} filePath 
 * @param {Object} data 
 */
export const writeJsonFile = async (filePath, data) => {
    const jsonString = JSON.stringify(data, null, 2);
    await ensurePathExists(path.dirname(filePath));
    await fs.writeFile(filePath, jsonString);
}

/**
 * Read a Yaml file and parse its content into a JavaScript object.
 * 
 * @param {string} filePath
 * @returns {Promise<Object|null>} The parsed Yaml object
 */
export const readYamlFile = async (filePath) => {
    if (!await fileExists(filePath)) {
        return null;
    }
    const yamlString = await fs.readFile(filePath, 'utf8');
    return /** @type {Object} */ (yamlLoad(yamlString));
}
 

/**
 * Reads a JSON file and parses its content into a JavaScript object.
 * 
 * @param {string} filePath 
 * @returns {Promise<Object|null>} The parsed JSON object
 */
export const readJsonFile = async (filePath) => {
    if (!await fileExists(filePath)) {
        return null;
    }
    const jsonString = await fs.readFile(filePath, 'utf8');
    return JSON.parse(jsonString);
}
