import { describe, it, expect } from 'vitest';
import { FieldConfigOverride } from './FieldConfigOverride.js';

describe('FieldConfigOverride', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigOverride', () => {
        const fieldConfigOverride = new FieldConfigOverride(defaultOptions)

        expect(fieldConfigOverride).toBeInstanceOf(FieldConfigOverride);
        expect(fieldConfigOverride.asJson()).toEqual({
        });
    });
    it('should create a FieldConfigOverride with properties', () => {
        const fieldConfigOverride = new FieldConfigOverride(defaultOptions)
            .setSystemRef('test-system-ref')
            .setNewMatcher(
                matcher => matcher
                    .setId('test-id')
                    .setOptions({
                        prop1: 'value1',
                        prop2: 'value2',
                    })
            )

        expect(fieldConfigOverride).toBeInstanceOf(FieldConfigOverride);
        expect(fieldConfigOverride.asJson()).toEqual({
            __systemRef: 'test-system-ref',
            matcher: {
                id: 'test-id',
                options: {
                    prop1: 'value1',
                    prop2: 'value2',
                }
            }
        });
    });
});