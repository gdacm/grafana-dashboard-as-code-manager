import { describe, it, expect } from 'vitest';
import { FieldConfigCustomTable } from './FieldConfigCustomTable.js';
import { FieldConfigCustomTableCellOptions } from './FieldConfigCustomTableCellOptions.js';

describe('FieldConfigCustomTable', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomTable', () => {
        const fieldConfigCustomTable = new FieldConfigCustomTable(defaultOptions)
        
        expect(fieldConfigCustomTable).toBeInstanceOf(FieldConfigCustomTable);
        expect(fieldConfigCustomTable.asJson()).toEqual({
            cellOptions: {},
            footer: {},
        });
    });
    it('should create a FieldConfigCustomTable with properties', () => {
        const fieldConfigCustomTable = new FieldConfigCustomTable(defaultOptions)
            .setAlign('some alignment')
            .setInspect(true)
            .setCellOptions(
                new FieldConfigCustomTableCellOptions(defaultOptions)
                    .setType('some type')
            )
        
        expect(fieldConfigCustomTable).toBeInstanceOf(FieldConfigCustomTable);
        expect(fieldConfigCustomTable.asJson()).toEqual({
            cellOptions: {
                type: "some type",
            },
            footer: {},
            align: 'some alignment',
            inspect: true,
        });
    });
});