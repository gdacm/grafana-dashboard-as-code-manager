import { describe, it, expect } from 'vitest';
import { Datasource } from './Datasource.js';

describe('Datasource', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a Datasource', () => {
        const datasource = new Datasource(defaultOptions)
            .setType('someType')
            .setUid('someUid')
        
        expect(datasource).toBeInstanceOf(Datasource);
        expect(datasource.asJson()).toEqual({
            type: 'someType',
            uid: 'someUid'
        });
    });
});