import { describe, it, expect } from 'vitest';
import { Gauge } from './Gauge.js';
import { Datasource } from './Datasource.js';

describe('Gauge', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a Gauge', () => {
        const gauge = new Gauge(defaultOptions)
            .setDatasource(
                new Datasource(defaultOptions)
                    .setUid('test-uid')
                    .setType('test-type')
            )
            .withFieldConfig(
                fieldConfig => fieldConfig
                    .withDefaults(
                        defaults => defaults
                            .setColorMode('test-color-mode')
                    )
            )

        expect(gauge).toBeInstanceOf(Gauge);
        expect(gauge.asJson()).toEqual({
            datasource: {
                uid: 'test-uid',
                type: 'test-type'
            },
            fieldConfig: {
                defaults: {
                    color: {
                        mode: 'test-color-mode'
                    },
                    custom: {},
                    thresholds: {
                        mode: 'absolute'
                    }
                }
            },
            options: {},
            title: "",
            type: "gauge",
        });
    });

    it('should create a Gauge with properties', () => {
        const gauge = new Gauge(defaultOptions)
            .setDatasource(
                new Datasource(defaultOptions)
                    .setUid('test-uid')
                    .setType('test-type')
            )
            .withFieldConfig(
                fieldConfig => fieldConfig
                    .withDefaults(
                        defaults => defaults
                            .setColorMode('test-color-mode')
                            .setMax(100)
                            .setMin(35)
                    )
                    .addNewOverrideHideSeriesFrom(['x', 'y'])
            )
            .setTitle('Test Gauge')

        expect(gauge).toBeInstanceOf(Gauge);
        expect(gauge.asJson()).toEqual({
            datasource: {
                uid: 'test-uid',
                type: 'test-type'
            },
            fieldConfig: {
                defaults: {
                    color: {
                        mode: 'test-color-mode',
                    },
                    custom: {},
                    max: 100,
                    min: 35,
                    thresholds: {
                        mode: 'absolute'
                    }
                },
                overrides: [
                    {
                        __systemRef: 'hideSeriesFrom',
                        matcher: {
                            id: 'byNames',
                            options: {
                                'mode': 'exclude',
                                names: ['x', 'y'],
                                prefix: 'All except:',
                                'readOnly': true,
                            }
                        },
                        properties: [
                            {
                                id: 'custom.hideFrom',
                                value: {
                                    legend: false,
                                    tooltip: true,
                                    viz: true,

                                }
                            }
                        ]
                    }
                ]
            },
            options: {},
            title: "Test Gauge",
            type: "gauge",
        });
    });
});