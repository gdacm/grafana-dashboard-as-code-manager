import { describe, it, expect } from 'vitest';
import { FieldConfigDefault } from './FieldConfigDefault.js';
import { FieldConfigCustom } from './FieldConfigCustom.js';

describe('FieldConfigDefault', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigDefault', () => {
        const fieldConfigDefault = new FieldConfigDefault(defaultOptions)
        
        expect(fieldConfigDefault).toBeInstanceOf(FieldConfigDefault);
        expect(fieldConfigDefault.asJson()).toEqual({
            thresholds: {
                mode: "absolute"
            }
        });
    });

    it('should create a FieldConfigDefault with properties', () => {
        const fieldConfigDefault = new FieldConfigDefault(defaultOptions)
            .setCustom(
                new FieldConfigCustom(defaultOptions)
            )
            .setDecimals(7)
            .setFieldMinMax(true)
            .addNewMapping(
                mapping => mapping
            )
        
        expect(fieldConfigDefault).toBeInstanceOf(FieldConfigDefault);
        expect(fieldConfigDefault.asJson()).toEqual({
            custom: {},
            decimals: 7,
            fieldMinMax: true,
            mappings: [
                {},
            ],
            thresholds: {
                mode: "absolute"
            }
        });
    });
});