import { describe, it, expect } from 'vitest';
import { FieldConfigCustomText } from './FieldConfigCustomText.js';

describe('FieldConfigCustomText', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomText', () => {
        const fieldConfigCustomText = new FieldConfigCustomText(defaultOptions)
        
        expect(fieldConfigCustomText).toBeInstanceOf(FieldConfigCustomText);
        expect(fieldConfigCustomText.asJson()).toEqual({
        });
    });
});