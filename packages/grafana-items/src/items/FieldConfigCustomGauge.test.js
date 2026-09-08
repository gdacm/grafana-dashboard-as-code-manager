import { describe, it, expect } from 'vitest';
import { FieldConfigCustomGauge } from './FieldConfigCustomGauge.js';

describe('FieldConfigCustomGauge', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomGauge', () => {
        const fieldConfigCustomGauge = new FieldConfigCustomGauge(defaultOptions)
        
        expect(fieldConfigCustomGauge).toBeInstanceOf(FieldConfigCustomGauge);
        expect(fieldConfigCustomGauge.asJson()).toEqual({
        });
    });
});