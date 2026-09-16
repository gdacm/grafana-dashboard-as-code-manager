import { describe, it, expect } from 'vitest';
import { FieldConfigCustomHistogram } from './FieldConfigCustomHistogram.js';

describe('FieldConfigCustomHistogram', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomHistogram', () => {
        const fieldConfigCustomHistogram = new FieldConfigCustomHistogram(defaultMetaOptions)

        expect(fieldConfigCustomHistogram).toBeInstanceOf(FieldConfigCustomHistogram);
        expect(fieldConfigCustomHistogram.asJson()).toEqual({
            hideFrom: {
                legend: false,
                tooltip: false,
                viz: false,
            },
            scaleDistribution: {
                type: "linear",
            },
        });
    });
});