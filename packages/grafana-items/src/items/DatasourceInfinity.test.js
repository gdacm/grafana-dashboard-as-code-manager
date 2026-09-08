import { describe, it, expect } from 'vitest';
import { DatasourceInfinity } from './DatasourceInfinity.js';

describe('DatasourceInfinity', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a DatasourceInfinity', () => {
        const datasourceInfinity = new DatasourceInfinity(defaultOptions)
            .setUid('datasource-uid');
        
        expect(datasourceInfinity).toBeInstanceOf(DatasourceInfinity);
        expect(datasourceInfinity.asJson()).toEqual({
            type: 'yesoreyeram-infinity-datasource',
            uid: 'datasource-uid'
        });
    });
});