import { describe, it, expect } from 'vitest';
import { SimulationQueryKey } from './SimulationQueryKey.js';

describe('SimulationQueryKey', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a SimulationQueryKey', () => {
        const simulationQueryKey = new SimulationQueryKey(defaultMetaOptions)
        
        expect(simulationQueryKey).toBeInstanceOf(SimulationQueryKey);
        expect(simulationQueryKey.asJson()).toEqual({
        });
    });
    it('should create a SimulationQueryKey with properties', () => {
        const simulationQueryKey = new SimulationQueryKey(defaultMetaOptions)
            .setTick(1)
            .setType('test-type')
            .setUid('test-uid')
        
        expect(simulationQueryKey).toBeInstanceOf(SimulationQueryKey);
        expect(simulationQueryKey.asJson()).toEqual({
            tick: 1,
            type: 'test-type',
            uid: 'test-uid',
        });
    });
});