import { describe, it, expect } from 'vitest';
import { FieldConfigCustomBarChart } from './FieldConfigCustomBarChart.js';

describe('FieldConfigCustomBarChart', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomBarChart', () => {
        const fieldConfigCustomBarChart = new FieldConfigCustomBarChart(defaultOptions)

        expect(fieldConfigCustomBarChart).toBeInstanceOf(FieldConfigCustomBarChart);
        expect(fieldConfigCustomBarChart.asJson()).toEqual({
            hideFrom: {
                legend: false,
                tooltip: false,
                viz: false,
            },
            scaleDistribution: {
                type: 'linear'
            },
            thresholdsStyle: {
                mode: 'off',
            }
        });
    });
    it('should create a FieldConfigCustomBarChart with properties', () => {
        const fieldConfigCustomBarChart = new FieldConfigCustomBarChart(defaultOptions)
            .setAxisBorderShow(true)
            .setAxisCenteredZero(false)
            .setAxisColorMode('someMode')
            .setAxisGridShow(true)
            .setAxisLabel('someLabel')
            .setAxisPlacement('somePlacement')
            .setAxisSoftMax(100)
            .setAxisSoftMin(3)
            .setAxisWidth(12)
            .setFillOpacity(0.8)
            .setGradientMode('some gradient mode')
            .withHideFrom(
                hideFrom => hideFrom
                    .setLegend(true)
                    .setTooltip(false)
                    .setViz(true)
            )
            .setLineWidth(2)
            .setThresholdsStyleMode('some mode')

        expect(fieldConfigCustomBarChart).toBeInstanceOf(FieldConfigCustomBarChart);
        expect(fieldConfigCustomBarChart.asJson()).toEqual({
            axisBorderShow: true,
            axisCenteredZero: false,
            axisColorMode: 'someMode',
            axisGridShow: true,
            axisLabel: 'someLabel',
            axisPlacement: 'somePlacement',
            axisSoftMax: 100,
            axisSoftMin: 3,
            axisWidth: 12,
            fillOpacity: 0.8,
            gradientMode: 'some gradient mode',
            hideFrom: {
                legend: true,
                tooltip: false,
                viz: true,
            },
            lineWidth: 2,
            scaleDistribution: {
                type: 'linear'
            },
            thresholdsStyle: {
                mode: 'some mode',
            }
        });
    });
});