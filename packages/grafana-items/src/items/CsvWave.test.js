import { describe, it, expect } from 'vitest';
import { CsvWave } from './CsvWave.js';

describe('CsvWave', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a CsvWave', () => {
        const csvWave = new CsvWave(defaultMetaOptions)
        
        expect(csvWave).toBeInstanceOf(CsvWave);
        expect(csvWave.asJson()).toEqual({
        });
    });
    it('should create a CsvWave with properties', () => {
        const csvWave = new CsvWave(defaultMetaOptions)
            .setLabels('test-labels')
            .setName('test-name')
            .setTimeStep(1)
            .setValuesCSV('test-values-csv')
        
        expect(csvWave).toBeInstanceOf(CsvWave);
        expect(csvWave.asJson()).toEqual({
            labels: "test-labels",
            name: "test-name",
            timeStep: 1,
            valuesCSV: "test-values-csv",
        });
    });
});