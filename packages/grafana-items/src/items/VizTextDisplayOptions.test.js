import { describe, it, expect } from 'vitest';
import { VizTextDisplayOptions } from './VizTextDisplayOptions.js';

describe('VizTextDisplayOptions', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a VizTextDisplayOptions', () => {
        const vizTextDisplayOptions = new VizTextDisplayOptions(defaultOptions)
        
        expect(vizTextDisplayOptions).toBeInstanceOf(VizTextDisplayOptions);
        expect(vizTextDisplayOptions.asJson()).toEqual({
        });
    });
    it('should create a VizTextDisplayOptions with properties', () => {
        const vizTextDisplayOptions = new VizTextDisplayOptions(defaultOptions)
            .setPercentSize(10)
            .setTitleSize(12)
            .setValueSize(14)
        
        expect(vizTextDisplayOptions).toBeInstanceOf(VizTextDisplayOptions);
        expect(vizTextDisplayOptions.asJson()).toEqual({
            percentSize: 10,
            titleSize: 12,
            valueSize: 14,
        });
    });
});