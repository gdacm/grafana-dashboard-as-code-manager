import { describe, it, expect } from 'vitest';
import { PieChartLegendOptions } from './PieChartLegendOptions.js';

describe('PieChartLegendOptions', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a PieChartLegendOptions', () => {
        const pieChartLegendOptions = new PieChartLegendOptions(defaultMetaOptions)
        
        expect(pieChartLegendOptions).toBeInstanceOf(PieChartLegendOptions);
        expect(pieChartLegendOptions.asJson()).toEqual({
        });
    });
    it('should create a PieChartLegendOptions with properties', () => {
        const pieChartLegendOptions = new PieChartLegendOptions(defaultMetaOptions)
            .setAsTable(false)        
            .setLimit(27)
            .addValue('percent')
        
        expect(pieChartLegendOptions).toBeInstanceOf(PieChartLegendOptions);
        expect(pieChartLegendOptions.asJson()).toEqual({
            asTable: false,
            limit: 27,
            values: ['percent']
        });
    });
    it('should create a PieChartLegendOptions with more properties', () => {
        const pieChartLegendOptions = new PieChartLegendOptions(defaultMetaOptions)
            .setAsTable(false)        
            .setLimit(27)
            .addValue('percent')
            .addValue('value')
        
        expect(pieChartLegendOptions).toBeInstanceOf(PieChartLegendOptions);
        expect(pieChartLegendOptions.asJson()).toEqual({
            asTable: false,
            limit: 27,
            values: ['percent', 'value']
        });
    });
});