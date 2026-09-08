import { GrafanaItem } from "./GrafanaItem.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { Datasource } from "./Datasource.js";
import { GridPos } from "./GridPos.js";
import { FieldConfig } from "./FieldConfig.js";
import { Target } from "./Target.js";
import { Link } from "./Link.js";
import { DataTransformation } from "./DataTransformation.js";

export const Panel = defineGrafanaItemClass('Panel', GrafanaItem)
    .defineValue('cacheTimeout', String)
    .defineObject('datasource', Datasource, { onDefault: (options) => undefined })
    .defineValue('description', String)
    .defineObject('fieldConfig', FieldConfig, { onDefault: (options) => new FieldConfig(options) })
    .defineObject('gridPos', GridPos, { setNew: true })
    .defineMethod('setPos', '(x: number, y: number, w: number, h: number): this;', {
        /**
         * @param {Panel} panel
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         */
        code: (panel, x, y, w, h) => {
            return panel.setNewGridPos((gridPos) => gridPos.setPos(x, y, w, h))
        }
    })
    .defineValue('hideTimeOverride', Boolean)
    .defineValue('id', Number)
    .defineValue('interval', String)
    .defineArray('links', Link)
    .defineValue('maxDataPoints', Number)
    .defineValue('maxPerRow', Number)
    .defineObject('options', Object)
    .defineValue('pluginVersion', String)
    .defineValue('queryCachingTTL', Number)
    .defineValue('repeat', String)
    .defineValue('repeatDirection', String)
    .defineArray('targets', Target)
    .defineMethod('addTargetWithParams', '(refId: string, query: string, datasource: Datasource): this;', {
        /**
         * @param {Panel} panel
         * @param {string} refId
         * @param {string} query
         * @param {Datasource} datasource
         */
        code: (panel, refId, query, datasource) => {
            return panel.addTarget(
                new Target(panel.metaOptions)
                    .setRefId(refId)
                    .setQuery(query)
                    .setDatasource(datasource)
            );
        }
    })
    .defineValue('timeFrom', String)
    .defineValue('timeShift', String)
    .defineArray('transformations', DataTransformation)
    .defineValue('type', String, { onDefault: (options) => '' })
    .defineValue('title', String, { onDefault: (options) => '' })
    .asClass
