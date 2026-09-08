import { describe, it, expect } from 'vitest';
import { PanelOptionsStat } from './PanelOptionsStat.js';

describe('PanelOptionsStat', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a PanelOptionsStat', () => {
        const panelOptionsStat = new PanelOptionsStat(defaultOptions)
        
        expect(panelOptionsStat).toBeInstanceOf(PanelOptionsStat);
        expect(panelOptionsStat.asJson()).toEqual({
        });
    });
});