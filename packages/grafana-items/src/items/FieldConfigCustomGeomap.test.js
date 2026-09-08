import { describe, it, expect } from 'vitest';
import { FieldConfigCustomGeomap } from './FieldConfigCustomGeomap.js';
import { HideFrom } from './HideFrom.js';

describe('FieldConfigCustomGeomap', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a FieldConfigCustomGeomap', () => {
        const fieldConfigCustomGeomap = new FieldConfigCustomGeomap(defaultOptions)
        
        expect(fieldConfigCustomGeomap).toBeInstanceOf(FieldConfigCustomGeomap);
        expect(fieldConfigCustomGeomap.asJson()).toEqual({
            hideFrom: {
                legend: false,
                tooltip: false,
                viz: false,
            }
        });
    });
    it('should create a FieldConfigCustomGeomap with properties', () => {
        const fieldConfigCustomGeomap = new FieldConfigCustomGeomap(defaultOptions)
            .setHideFrom(
                new HideFrom(defaultOptions)
                    .setLegend(true)
                    .setTooltip(true)
                    .setViz(false)
            )
        
        expect(fieldConfigCustomGeomap).toBeInstanceOf(FieldConfigCustomGeomap);
        expect(fieldConfigCustomGeomap.asJson()).toEqual({
            hideFrom: {
                legend: true,
                tooltip: true,
                viz: false,
            }
        });
    });
});