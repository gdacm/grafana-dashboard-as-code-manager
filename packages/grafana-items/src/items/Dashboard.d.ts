import { GrafanaItem } from "./GrafanaItem.js";
import { Annotations } from "./Annotations.js";
import { Link } from "./Link.js";
import { Panel } from "./Panel.js";
import { Templating } from "./Templating.js";
import { TimeRange } from "./TimeRange.js";
import { TimePicker } from "./TimePicker.js";

import type { GenericMetaOptions } from "@gdacm/base-types";

export declare class Dashboard extends GrafanaItem {
    setAnnotations(annotations: Annotations): this;
    withAnnotations(onWith: (item: Annotations) => void): this;
    get annotations(): Annotations;
    setEditable(editable: Boolean): this;
    setFiscalYearStartMonth(fiscalYearStartMonth: Number): this;
    setGraphTooltip(graphTooltip: Number): this;
    initLinks(): this;
    get links(): Link[];
    addLink(link: Link): this;
    addNewLink(onNewCreated: (item: Link) => Link): this;
    withLinks(onWith: (links: Link[]) => void): this;
    setLiveNow(liveNow: Boolean): this;
    addPanel(panel: Panel): this;
    initPanels(): this;
    get panels(): Panel[];
    addNewPanel(onNewCreated: (item: Panel) => Panel): this;
    withPanels(onWith: (panels: Panel[]) => void): this;
    setPreload(preload: Boolean): this;
    setSchemaVersion(schemaVersion: Number): this;
    setRefresh(refresh: String): this;
    setTags(tags: Array<String>): this;
    setTemplating(templating: Templating): this;
    withTemplating(onWith: (item: Templating) => void): this;
    get templating(): Templating;
    setTime(time: TimeRange): this;
    withTime(onWith: (item: TimeRange) => void): this;
    get time(): TimeRange;
    setTimeRange(from: string, to: string): this;
    setTimepicker(timepicker: TimePicker): this;
    withTimepicker(onWith: (item: TimePicker) => void): this;
    get timepicker(): TimePicker;
    setTimezone(timezone: String): this;
    setTitle(title: String): this;
    setUid(uid: String): this;
}
