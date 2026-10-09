import { describe, it, expect } from 'vitest';
import { TargetInfluxQuery } from './TargetInfluxQuery.js';

describe('TargetInfluxQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a TargetInfluxQuery', () => {
        const targetInfluxQuery = new TargetInfluxQuery(defaultMetaOptions)
        
        expect(targetInfluxQuery).toBeInstanceOf(TargetInfluxQuery);
        expect(targetInfluxQuery.asJson()).toEqual({
        });
    });
});