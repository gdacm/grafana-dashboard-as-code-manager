import { describe, it, expect } from 'vitest';
import { GrafanaQueryFile } from './GrafanaQueryFile.js';

describe('GrafanaQueryFile', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a GrafanaQueryFile', () => {
        const grafanaQueryFile = new GrafanaQueryFile(defaultMetaOptions)
        
        expect(grafanaQueryFile).toBeInstanceOf(GrafanaQueryFile);
        expect(grafanaQueryFile.asJson()).toEqual({
        });
    });
    it('should create a GrafanaQueryFile', () => {
        const grafanaQueryFile = new GrafanaQueryFile(defaultMetaOptions)
            .setName('testName')
            .setSize(123)
        
        expect(grafanaQueryFile).toBeInstanceOf(GrafanaQueryFile);
        expect(grafanaQueryFile.asJson()).toEqual({
            name: 'testName',
            size: 123,
        });
    });
});