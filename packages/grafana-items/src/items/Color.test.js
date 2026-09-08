import { describe, it, expect } from 'vitest';
import { Color } from './Color.js';

describe('Color', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a Color', () => {
        const color = new Color(defaultOptions)
            .setMode('someMode');
        
        expect(color).toBeInstanceOf(Color);
        expect(color.asJson()).toEqual({
            mode: 'someMode'
        });
    });
});