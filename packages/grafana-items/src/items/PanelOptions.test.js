import { describe, it, expect } from 'vitest';
import { PanelOptions } from './PanelOptions.js';

describe('PanelOptions', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a PanelOptions', () => {
        const panelOptions = new PanelOptions(defaultOptions)
        
        expect(panelOptions).toBeInstanceOf(PanelOptions);
        expect(panelOptions.asJson()).toEqual({
        });
    });
});