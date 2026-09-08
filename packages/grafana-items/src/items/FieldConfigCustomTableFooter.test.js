import { describe, it, expect } from 'vitest';
import { FieldConfigCustomTableFooter } from './FieldConfigCustomTableFooter.js';

describe('FieldConfigCustomTableFooter', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomTableFooter', () => {
        const fieldConfigCustomTableFooter = new FieldConfigCustomTableFooter(defaultOptions)
            .addReducer('some reducer')
            .addReducer('another reducer')
        
        expect(fieldConfigCustomTableFooter).toBeInstanceOf(FieldConfigCustomTableFooter);
        expect(fieldConfigCustomTableFooter.asJson()).toEqual({
            reducers: ["some reducer", "another reducer"]
        });
    });
});