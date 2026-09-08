import { describe, it, expect } from 'vitest';
import { FieldConfig } from './FieldConfig.js';
import { FieldConfigDefault } from './FieldConfigDefault.js';

describe('FieldConfig', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfig', () => {
        const fieldConfig = new FieldConfig(defaultOptions)
            .setDefaults(
                new FieldConfigDefault(defaultOptions)
                    .setNewColor(
                        color => color
                            .setMode('someMode')
                    )
            )
            .addNewOverride(
                override => override
                    .setSystemRef('someSystemRef')
            )
            .addNewOverrideHideSeriesFrom(['x', 'y', 'test'])


        expect(fieldConfig).toBeInstanceOf(FieldConfig);
        expect(fieldConfig.asJson()).toEqual({
            defaults: {
                color: {
                    mode: 'someMode'
                },
                thresholds: {
                    mode: 'absolute'
                }
            },
            overrides: [
                {
                    __systemRef: 'someSystemRef'
                },
                {
                    __systemRef: 'hideSeriesFrom',
                    matcher: {
                        id: 'byNames',
                        options: {
                            'mode': 'exclude',
                            names: ['x', 'y', 'test'],
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

        });
    });
});