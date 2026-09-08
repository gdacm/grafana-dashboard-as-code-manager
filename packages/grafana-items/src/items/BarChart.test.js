import { describe, it, expect } from 'vitest';
import { BarChart } from './BarChart.js';
import { Datasource } from './Datasource.js';

describe('BarChart', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a BarChart', () => {
        const barChart = new BarChart(defaultOptions)
            .setDatasource(
                new Datasource(defaultOptions)
                    .setType('some type')
                    .setUid('some uid')
            )

        expect(barChart).toBeInstanceOf(BarChart);
        expect(barChart.asJson()).toEqual({
            datasource: {
                type: 'some type',
                uid: 'some uid'
            },
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
                        scaleDistribution: {
                            type: 'linear'
                        },
                        thresholdsStyle: {
                            mode: 'off',
                        }
                    },
                    thresholds: {
                        mode: 'absolute'
                    },
                }
            },
            options: {
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
            },
            title: '',
            type: 'barchart',
        });
    });
    it('should create a BarChart with properties', () => {
        const barChart = new BarChart(defaultOptions)
            .setCacheTimeout('some cache timeout')
            .setDatasource(
                new Datasource(defaultOptions)
                    .setType('some type')
                    .setUid('some uid')
            )
            .setDescription('some description')
            .setTitle('some title')
            .withFieldConfig(
                fieldConfig => fieldConfig
                    .withDefaults(
                        defaults => defaults
                            .setColorMode('some color mode')
                    )
            )
            .setPos(0, 0, 24, 9)
            .setHideTimeOverride(true)
            .setInterval('some interval')
            .addNewLink(
                link => link
                    .setAsDropdown(true)
                    .setIcon('some icon')
                    .setTitle('some link title')
                    .setType('some type')
                    .setUrl('type://resource/some/path')
            )

        expect(barChart).toBeInstanceOf(BarChart);
        expect(barChart.asJson()).toEqual({
            cacheTimeout: 'some cache timeout',
            datasource: {
                type: 'some type',
                uid: 'some uid'
            },
            description: 'some description',
            fieldConfig: {
                defaults: {
                    color: {
                        mode: 'some color mode'
                    },
                    custom: {
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

                    },
                    thresholds: {
                        mode: 'absolute'
                    },
                }
            },
            gridPos: {
                h: 9,
                w: 24,
                x: 0,
                y: 0
            },
            hideTimeOverride: true,
            interval: 'some interval',
            links: [
                {
                    asDropdown: true,
                    icon: 'some icon',
                    tags: [],
                    title: 'some link title',
                    type: 'some type',
                    url: 'type://resource/some/path'
                }
            ],
            options: {
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
            },
            title: 'some title',
            type: 'barchart',
        });
    });
});