import { describe, it, expect } from 'vitest';
import { PieChart } from './PieChart.js';

describe('PieChart', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a PieChart', () => {
        const pieChart = new PieChart(defaultMetaOptions)
        
        expect(pieChart).toBeInstanceOf(PieChart);
        expect(pieChart.asJson()).toEqual({
            datasource: undefined,
            fieldConfig: {
                defaults: {
                    color: {
                        mode: 'palette-classic'
                    },
                    custom: {
                        hideFrom: {
                            legend: false,
                            tooltip: false,
                            viz: false,
                        },
                    },
                }
            },
            options: {},
            title: "",
            type: "piechart"
        });
    });
});