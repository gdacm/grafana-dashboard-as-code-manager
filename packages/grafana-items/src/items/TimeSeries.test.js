import { describe, it, expect } from 'vitest';
import { TimeSeries } from './TimeSeries.js';

describe('TimeSeries', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a TimeSeries', () => {
        const timeSeries = new TimeSeries(defaultMetaOptions)
        
        expect(timeSeries).toBeInstanceOf(TimeSeries);
        expect(timeSeries.asJson()).toEqual({
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
                        lineStyle: {
                            fill: 'solid',
                        },
                        scaleDistribution: {
                            type: 'linear'
                        },
                        stacking: {
                            group: 'A',
                            mode: 'none'
                        },
                        thresholdsStyle: {
                            mode: 'off',
                        },
                    },
                    thresholds: {
                        mode: 'absolute'
                    }
                }
            },
            options: {
                legend: {
                    displayMode: 'list',
                    placement: 'bottom',
                    showLegend: false,
                },
                tooltip: {
                    hideZeros: false,
                    mode: 'single',
                    sort: 'none',
                },
            },
            title: "",
            type: "timeseries"
        });
    });
});