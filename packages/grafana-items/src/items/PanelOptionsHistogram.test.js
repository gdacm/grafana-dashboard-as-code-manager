import { describe, it, expect } from 'vitest';
import { PanelOptionsHistogram } from './PanelOptionsHistogram.js';

describe('PanelOptionsHistogram', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a PanelOptionsHistogram', () => {
        const panelOptionsHistogram = new PanelOptionsHistogram(defaultMetaOptions)
        
        expect(panelOptionsHistogram).toBeInstanceOf(PanelOptionsHistogram);
        expect(panelOptionsHistogram.asJson()).toEqual({
        });
    });
});