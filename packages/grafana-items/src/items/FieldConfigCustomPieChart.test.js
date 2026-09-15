import { describe, it, expect } from 'vitest';
import { FieldConfigCustomPieChart } from './FieldConfigCustomPieChart.js';

describe('FieldConfigCustomPieChart', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomPieChart', () => {
        const fieldConfigCustomPieChart = new FieldConfigCustomPieChart(defaultMetaOptions)
        
        expect(fieldConfigCustomPieChart).toBeInstanceOf(FieldConfigCustomPieChart);
        expect(fieldConfigCustomPieChart.asJson()).toEqual({
        });
    });
});