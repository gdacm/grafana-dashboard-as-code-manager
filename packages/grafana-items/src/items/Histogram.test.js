import { describe, it, expect } from 'vitest';
import { Histogram } from './Histogram.js';

describe('Histogram', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a Histogram', () => {
        const histogram = new Histogram(defaultMetaOptions)

        expect(histogram).toBeInstanceOf(Histogram);
        expect(histogram.asJson()).toEqual({
            datasource: undefined,
            fieldConfig: {
                defaults: {
                    color: {
                        mode: "palette-classic"
                    },
                    custom: {
                        hideFrom: {
                            legend: false,
                            tooltip: false,
                            viz: false,
                        },
                        scaleDistribution: {
                            type: "linear",
                        },
                    },
                    thresholds: {
                        mode: "absolute",
                    },
                },
            },
            options: {},
            title: "",
            type: "histogram",
        });
    });
});