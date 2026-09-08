import { describe, it, expect } from 'vitest';
import { PanelOptionsBarChart } from './PanelOptionsBarChart.js';

describe('PanelOptionsBarChart', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a PanelOptionsBarChart', () => {
        const panelOptionsBarChart = new PanelOptionsBarChart(defaultOptions)
        
        expect(panelOptionsBarChart).toBeInstanceOf(PanelOptionsBarChart);
        expect(panelOptionsBarChart.asJson()).toEqual({
            legend: {
                displayMode: 'list',
                placement: 'bottom',
                showLegend: false
            },
            tooltip: {
                hideZeros: false,
                mode: 'single',
                sort: 'none'
            },
        });
    });

    it('should create a PanelOptionsBarChart with properties', () => {
        const panelOptionsBarChart = new PanelOptionsBarChart(defaultOptions)
            .setBarRadius(5)
            .setBarWidth(10)
            .setColorByField('some color by field')
            .setFullHighlight(true)
            .setGroupWidth(15)
            .withLegend(
                legend => legend
                    .setDisplayMode('some mode')
                    .setPlacement('some placement')
                    .setShowLegend(true)
            )
            .setOrientation('horizontal')
            .setShowValue('always')
            .setStacking('normal')
            .withTooltip(
                tooltip => tooltip
                    .setHideZeros(true)
                    .setMode('some mode')
                    .setSort('some sort')
            )
            .setXField('x')
            .setXTickLabelMaxLength(20)
            .setXTickLabelRotation(30)
            .setXTickLabelSpacing(5)
        
        expect(panelOptionsBarChart).toBeInstanceOf(PanelOptionsBarChart);
        expect(panelOptionsBarChart.asJson()).toEqual({
            barRadius: 5,
            barWidth: 10,
            colorByField: 'some color by field',
            fullHighlight: true,
            groupWidth: 15,
            legend: {
                displayMode: 'some mode',
                placement: 'some placement',
                showLegend: true
            },
            orientation: 'horizontal',
            showValue: 'always',
            stacking: 'normal',
            tooltip: {
                hideZeros: true,
                mode: 'some mode',
                sort: 'some sort'
            },
            xField: 'x',
            xTickLabelMaxLength: 20,
            xTickLabelRotation: 30,
            xTickLabelSpacing: 5,
        });
    });
});