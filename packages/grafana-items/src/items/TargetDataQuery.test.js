import { describe, it, expect } from 'vitest';
import { TargetDataQuery } from './TargetDataQuery.js';

describe('TargetDataQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a TargetDataQuery', () => {
        const targetDataQuery = new TargetDataQuery(defaultMetaOptions)
        
        expect(targetDataQuery).toBeInstanceOf(TargetDataQuery);
        expect(targetDataQuery.asJson()).toEqual({
        });
    });
});