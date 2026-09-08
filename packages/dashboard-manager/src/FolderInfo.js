export class FolderInfo {
    constructor() {
        /** @type {string|undefined} */
        this._vid = undefined;
        /** @type {string|undefined} */
        this._sid = undefined;
        /** @type {string|undefined} */
        this._name = undefined;
        /** @type {string|undefined} */
        this._emoji = undefined;
        /** @type {string|undefined} */
        this._parentVid = undefined;
        /** @type {boolean} */
        this._fromServer = false;
    }

    /**
     * @returns {string|undefined}
     */
    get vid() {
        return this._vid;
    }

    /**
     * @param {string} vid
     * @returns {FolderInfo}
     */
    setVid(vid) {
        this._vid = vid;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get sid() {
        return this._sid;
    }
    /**
     * @param {string} sid
     * @returns {FolderInfo}
     */
    setSid(sid) {
        this._sid = sid;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get name() {
        return this._name;
    }

    /**
     * @param {string} name
     * @returns {FolderInfo}
     */
    setName(name) {
        this._name = name;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get emoji() {
        return this._emoji;
    }

    /**
     * @param {string} emoji
     * @returns {FolderInfo}
     */
    setEmoji(emoji) {
        this._emoji = emoji;
        return this;
    }

    /**
     * @returns {string|undefined}
     */
    get parentVid() {
        return this._parentVid;
    }

    /**
     * @param {string} parentVid
     * @returns {FolderInfo}
     */
    setParentVid(parentVid) {
        this._parentVid = parentVid;
        return this;
    }

    /**
     * @returns {boolean}
     */
    get fromServer() {
        return this._fromServer;
    }

    /**
     * @param {boolean} fromServer
     * @returns {FolderInfo}
     */
    setFromServer(fromServer) {
        this._fromServer = fromServer;
        return this;
    }
}