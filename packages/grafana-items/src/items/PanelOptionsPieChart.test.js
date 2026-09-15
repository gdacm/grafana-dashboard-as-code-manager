import { describe, it, expect } from 'vitest';
import { PanelOptionsPieChart } from './PanelOptionsPieChart.js';

describe('PanelOptionsPieChart', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a PanelOptionsPieChart', () => {
        const panelOptionsPieChart = new PanelOptionsPieChart(defaultMetaOptions)
        
        expect(panelOptionsPieChart).toBeInstanceOf(PanelOptionsPieChart);
        expect(panelOptionsPieChart.asJson()).toEqual({
        });
    });
});