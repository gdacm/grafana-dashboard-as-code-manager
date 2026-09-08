import { DashboardInfo } from "./DashboardInfo.js";
import { FolderInfo } from "./index.js";

/**
 * @typedef {(DashboardInfo|DashboardsInfo|DashboardInfo[]|DashboardsInfo[]|((info: Object) => DashboardInfo)|((info: Object) => DashboardsInfo)|((info: Object) => DashboardInfo[])|((info: Object) => DashboardsInfo[]))} DashboardsInfoItem
 */

export class DashboardsInfo {
    /**
     * @param  {DashboardsInfoItem[]} items
     */
    constructor(...items) {
        /** @type {DashboardsInfoItem[]} */
        this._items = [];
        items.forEach((item) => this._items.push(item));
        /**
         * @type {((dashboardInfo: DashboardInfo, info: Object) => DashboardInfo)[]} 
         */
        this._onDashboard = []
    }

    /**
     * @param {Object} info
     * @param {((dashboardInfo: DashboardInfo, info: Object) => DashboardInfo)[]} onDashboards
     * @returns {DashboardInfo[]}
     */
    getItems(info, onDashboards = []) {
        /** @type {DashboardInfo[]} */
        const result = [];
        for (const item of this._items) {
            if (item instanceof DashboardInfo) {
                result.push(item);
            } else if (item instanceof DashboardsInfo) {
                for (const subItem of item.getItems(info)) {
                    result.push(subItem);
                }
            } else if (Array.isArray(item)) {
                for (const subItem of item) {
                    if (subItem instanceof DashboardInfo) {
                        result.push(subItem);
                    } else if (subItem instanceof DashboardsInfo) {
                        for (const subSubItem of subItem.getItems(info)) {
                            result.push(subSubItem);
                        }
                    }
                }
            } else if (typeof item === 'function') {
                const itemResult = item(info);
                if (itemResult instanceof DashboardInfo) {
                    result.push(itemResult);
                } else if (itemResult instanceof DashboardsInfo) {
                    for (const subItem of itemResult.getItems(info)) {
                        result.push(subItem);
                    }
                } else if (Array.isArray(itemResult)) {
                    for (const subItem of itemResult) {
                        if (subItem instanceof DashboardInfo) {
                            result.push(subItem);
                        } else if (subItem instanceof DashboardsInfo) {
                            for (const subSubItem of subItem.getItems(info)) {
                                result.push(subSubItem);
                            }
                        }
                    }
                }
            }
        }
        const allOnDashboards = [...this._onDashboard, ...onDashboards];
        return result.map(dashboardInfo => {
            let dashboardInfoResult = dashboardInfo;
            for (const onDashboard of allOnDashboards) {
                dashboardInfoResult=onDashboard(dashboardInfo, info);
            }
            return dashboardInfoResult;
        });
    }

    /**
     * @param {((dashboardInfo: DashboardInfo, info: Object) => DashboardInfo)} callback
     * @returns {DashboardsInfo}
     **/
    forEachDashboard(callback) {
        this._onDashboard.push(callback);
        return this;
    }

    /**
     * @param {FolderInfo[]} path 
     * @returns {DashboardsInfo}
     */
    setPath(path) {
        return this.forEachDashboard((dashboardInfo) => dashboardInfo.setPath(path));
    }
}