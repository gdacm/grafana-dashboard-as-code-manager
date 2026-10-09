import { describe, it, expect } from 'vitest';
import { PulseWaveQuery } from './PulseWaveQuery.js';

describe('PulseWaveQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a PulseWaveQuery', () => {
        const pulseWaveQuery = new PulseWaveQuery(defaultMetaOptions)
        
        expect(pulseWaveQuery).toBeInstanceOf(PulseWaveQuery);
        expect(pulseWaveQuery.asJson()).toEqual({
        });
    });
    it('should create a PulseWaveQuery with properties', () => {
        const pulseWaveQuery = new PulseWaveQuery(defaultMetaOptions)
            .setOffCount(1)
            .setOffValue(2)
            .setOnCount(3)
            .setOnValue(4)
            .setTimeStep(5)
        
        expect(pulseWaveQuery).toBeInstanceOf(PulseWaveQuery);
        expect(pulseWaveQuery.asJson()).toEqual({
            offCount: 1,
            offValue: 2,
            onCount: 3,
            onValue: 4,
            timeStep: 5,
        });
    });
});