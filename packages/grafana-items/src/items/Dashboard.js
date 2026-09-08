import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { TimeRange } from "./TimeRange.js";
import { Panel } from "./Panel.js";
import { Templating } from "./Templating.js";
import { TimePicker } from "./TimePicker.js";
import { Annotations } from "./Annotations.js";
import { Link } from "./Link.js";
import { getAnnotations } from "../torefactor/index.js";

export const Dashboard = defineGrafanaItemClass('Dashboard', GrafanaItem)
    .setParent(GrafanaItem)
    .defineObject('annotations', Annotations, {
        onDefault: (options) => getAnnotations(options),
    })
    .defineValue('editable', Boolean)
    .defineValue('fiscalYearStartMonth', Number)
    .defineValue('graphTooltip', Number)
    .defineArray('links', Link, { itemName: 'link' })
    .defineValue('liveNow', Boolean)
    .defineMethod('addPanel', '(panel: Panel): this;', {
        /**
         * @param {Dashboard} dashboard
         * @param {Panel} panel
         * @returns {Dashboard}
         */
        code: (dashboard, panel) => {
            const max = dashboard.panels.reduce((acc, panel) => {
                const id = panel._getValue('id');
                if (id >= acc) {
                    return id;
                } else {
                    return acc;
                }
            }, 0);
            panel._setValue('id', max + 1);
            return dashboard._addArrayItem('panels', panel);
        }
    })
    .defineArray('panels', Panel, { itemName: 'panel' })
    .defineValue('preload', Boolean)
    .defineValue('schemaVersion', Number)
    .defineValue('refresh', String)
    .defineValue('tags', Array, { onDefault: (options) => [], typeName: 'Array<String>' })
    .defineObject('templating', Templating, {
        onDefault: (options) => new Templating(options),
    })
    .defineObject('time', TimeRange, {
        onDefault: (options) => new TimeRange(options),
    })
    .defineMethod('setTimeRange', '(from: string, to: string): this;', {
        /**
         * @param {Dashboard} dashboard
         * @param {string} from
         * @param {string} to
         * @returns {Dashboard}
         */
        code: (dashboard, from, to) => {
            dashboard.time.setRange(from, to);
            return dashboard;
        }
    })
    .defineObject('timepicker', TimePicker, {
        onDefault: (options) => new TimePicker(options),
    })
    .defineValue('timezone', String, { onDefault: (options) => 'browser' })
    .defineValue('title', String, { onDefault: (options) => '' })
    .defineValue('uid', String)
    .asClass