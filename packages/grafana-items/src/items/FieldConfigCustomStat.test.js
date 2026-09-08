import { describe, it, expect } from 'vitest';
import { FieldConfigCustomStat } from './FieldConfigCustomStat.js';

describe('FieldConfigCustomStat', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomStat', () => {
        const fieldConfigCustomStat = new FieldConfigCustomStat(defaultOptions)
        
        expect(fieldConfigCustomStat).toBeInstanceOf(FieldConfigCustomStat);
        expect(fieldConfigCustomStat.asJson()).toEqual({
        });
    });
});