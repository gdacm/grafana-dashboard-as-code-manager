import { Panel } from "./Panel.js";
import { defineGrafanaItemClass } from "../utils/typesDefinition.js";
import { PanelOptionsTable } from "./PanelOptionsTable.js";
import { FieldConfigCustomTable } from "./FieldConfigCustomTable.js";
import { FieldConfigCustomTableCellOptions } from "./FieldConfigCustomTableCellOptions.js";
import { FieldConfigCustomTableFooter } from "./FieldConfigCustomTableFooter.js";
import { definePanel } from "./properties/panel.js";

export const Table = defineGrafanaItemClass('Table', Panel)
    .with(builder => definePanel(builder, 'table', FieldConfigCustomTable, PanelOptionsTable, {
        onInit: (instance) => instance
            .withCustom(
                custom => custom
                    .setAlign('auto')
                    .setCellOptions(new FieldConfigCustomTableCellOptions(instance.metaOptions))
                    .withCellOptions(
                        cellOptions => cellOptions
                            .setType('auto')
                    )
                    .setFooter(new FieldConfigCustomTableFooter(instance.metaOptions))
                    .setInspect(false)
            )

    }))
    .asClass