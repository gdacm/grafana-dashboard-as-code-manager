import { describe, it, expect } from 'vitest';
import { UsaQuery } from './UsaQuery.js';

describe('UsaQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a UsaQuery', () => {
        const usaQuery = new UsaQuery(defaultMetaOptions)
        
        expect(usaQuery).toBeInstanceOf(UsaQuery);
        expect(usaQuery.asJson()).toEqual({
        });
    });
    it('should create a UsaQuery with properties', () => {
        const usaQuery = new UsaQuery(defaultMetaOptions)
            .addField('field1')
            .addField('field2')
            .setMode('test-mode')
            .setPeriod('test-period')
            .addState('state1')
            .addState('state2')
        
        expect(usaQuery).toBeInstanceOf(UsaQuery);
        expect(usaQuery.asJson()).toEqual({
            fields: ['field1', 'field2'],
            mode: 'test-mode',
            period: 'test-period',
            states: ['state1', 'state2'],
        });
    });
});