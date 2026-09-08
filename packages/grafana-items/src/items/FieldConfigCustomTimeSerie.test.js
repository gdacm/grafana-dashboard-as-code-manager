import { describe, it, expect } from 'vitest';
import { FieldConfigCustomTimeSerie } from './FieldConfigCustomTimeSerie.js';

describe('FieldConfigCustomTimeSerie', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomTimeSerie', () => {
        const fieldConfigCustomTimeSerie = new FieldConfigCustomTimeSerie(defaultOptions)
        
        expect(fieldConfigCustomTimeSerie).toBeInstanceOf(FieldConfigCustomTimeSerie);
        expect(fieldConfigCustomTimeSerie.asJson()).toEqual({
            hideFrom: {
                legend: false,
                tooltip: false,
                viz: false,
            },
            lineStyle: {
                fill: "solid",
            },
            scaleDistribution: {
                type: "linear",
            },
            stacking: {
                group: "A",
                mode: "none",
            },
            thresholdsStyle: {
                mode: "off",
            }
        });
    });
    it('should create a FieldConfigCustomTimeSerie with properties', () => {
        const fieldConfigCustomTimeSerie = new FieldConfigCustomTimeSerie(defaultOptions)
            .setAxisBorderShow(true)
            .setAxisCenteredZero(false)
            .setAxisColorMode('someColorMode')
            .setAxisGridShow(true)
            .setAxisPlacement('somePlacement')
            .setAxisSoftMax(107)
            .setAxisSoftMin(42)
            .setAxisWidth(10)
            .setBarAlignment(12)
            .setBarWidthFactor(0.5)
            .setDrawStyle('someDrawStyle')
            .setFillOpacity(0.8)
            .setGradientMode('someGradientMode')
            .withHideFrom(
                hideFrom => hideFrom
                    .setTooltip(true)
            )
            .setInsertNulls(true)
            .setLineInterpolation('someLineInterpolation')
            .setLineStyleFill('some line style fill')
            .setLineWidth(3)
            .setPointSize(5)
            .withScaleDistribution(
                scaleDistribution => scaleDistribution
                    .setType('some type')
            )
            .setShowPoints('some show points')
            .setShowValues(true)
            .setSpanNulls(false)
            .withStacking(
                stacking => stacking
                    .setMode('some mode')
            )
            .setThresholdsStyleMode('some mode')
        
        expect(fieldConfigCustomTimeSerie).toBeInstanceOf(FieldConfigCustomTimeSerie);
        expect(fieldConfigCustomTimeSerie.asJson()).toEqual({
            axisBorderShow: true,
            axisCenteredZero: false,
            axisColorMode: 'someColorMode',
            axisGridShow: true,
            axisPlacement: 'somePlacement',
            axisSoftMax: 107,
            axisSoftMin: 42,
            axisWidth: 10,
            barAlignment: 12,
            barWidthFactor: 0.5,
            drawStyle: 'someDrawStyle',
            fillOpacity: 0.8,
            gradientMode: 'someGradientMode',
            hideFrom: {
                legend: false,
                tooltip: true,
                viz: false,
            },
            insertNulls: true,
            lineInterpolation: 'someLineInterpolation',
            lineStyle: {
                fill: "some line style fill",
            },
            lineWidth: 3,
            pointSize: 5,
            scaleDistribution: {
                type: "some type",
            },
            showPoints: 'some show points',
            showValues: true,
            spanNulls: false,
            stacking: {
                group: "A",
                mode: "some mode",
            },
            thresholdsStyle: {
                mode: "some mode",
            }
        });
    });
});