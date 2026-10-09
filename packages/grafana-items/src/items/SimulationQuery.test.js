import { describe, it, expect } from 'vitest';
import { SimulationQuery } from './SimulationQuery.js';

describe('SimulationQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a SimulationQuery', () => {
        const simulationQuery = new SimulationQuery(defaultMetaOptions)
        
        expect(simulationQuery).toBeInstanceOf(SimulationQuery);
        expect(simulationQuery.asJson()).toEqual({
        });
    });
});