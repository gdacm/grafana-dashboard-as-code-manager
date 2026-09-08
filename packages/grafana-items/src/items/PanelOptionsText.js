import { PanelOptions } from "./PanelOptions.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsTextCode } from "./PanelOptionsTextCode.js";

export const PanelOptionsText = defineGrafanaItemClass('PanelOptionsText', PanelOptions)
    .defineObject('code', PanelOptionsTextCode, {
        onDefault: (options) => new PanelOptionsTextCode(options)
    })
    .defineValue('content', String)
    .defineValue('mode', String)
    .asClass
