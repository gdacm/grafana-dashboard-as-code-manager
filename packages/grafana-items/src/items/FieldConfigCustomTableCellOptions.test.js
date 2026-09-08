import { describe, it, expect } from 'vitest';
import { FieldConfigCustomTableCellOptions } from './FieldConfigCustomTableCellOptions.js';

describe('FieldConfigCustomTableCellOptions', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomTableCellOptions', () => {
        const fieldConfigCustomTableCellOptions = new FieldConfigCustomTableCellOptions(defaultOptions)
        
        expect(fieldConfigCustomTableCellOptions).toBeInstanceOf(FieldConfigCustomTableCellOptions);
        expect(fieldConfigCustomTableCellOptions.asJson()).toEqual({
        });
    });
    it('should create a FieldConfigCustomTableCellOptions with properties', () => {
        const fieldConfigCustomTableCellOptions = new FieldConfigCustomTableCellOptions(defaultOptions)
            .setType('some type')
        
        expect(fieldConfigCustomTableCellOptions).toBeInstanceOf(FieldConfigCustomTableCellOptions);
        expect(fieldConfigCustomTableCellOptions.asJson()).toEqual({
            type: "some type",
        });
    });
});