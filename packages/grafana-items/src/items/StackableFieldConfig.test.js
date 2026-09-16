import { describe, it, expect } from 'vitest';
import { StackableFieldConfig } from './StackableFieldConfig.js';

describe('StackableFieldConfig', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a StackableFieldConfig', () => {
        const stackableFieldConfig = new StackableFieldConfig(defaultMetaOptions)
        
        expect(stackableFieldConfig).toBeInstanceOf(StackableFieldConfig);
        expect(stackableFieldConfig.asJson()).toEqual({
        });
    });
});