import { describe, it, expect } from 'vitest';
import { TargetGrafanaQuery } from './TargetGrafanaQuery.js';
import { GrafanaQueryFile } from './GrafanaQueryFile.js';

describe('TargetGrafanaQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a TargetGrafanaQuery', () => {
        const targetGrafanaQuery = new TargetGrafanaQuery(defaultMetaOptions)
        
        expect(targetGrafanaQuery).toBeInstanceOf(TargetGrafanaQuery);
        expect(targetGrafanaQuery.asJson()).toEqual({
        });
    });
    it('should create a TargetGrafanaQuery with properties', () => {
        const targetGrafanaQuery = new TargetGrafanaQuery(defaultMetaOptions)
            .setBuffer(1024)
            .setChannel('test-channel')
            .setDropPercent(0.5)
            .setFile(
                new GrafanaQueryFile(defaultMetaOptions)
                    .setName('test-file-name')
                    .setSize(2048)
            )
            // .setFilter({ type: 'test-filter' })
            .setMax(100)
            .setMin(0)
            .setNoise(0.1)
            .setPath('test-path')
            .setQueryType('randomWalk')
            .setSearch({ query: 'test-search' })
            .setSearchNext({ query: 'test-search-next' })
            .setSeriesCount(5)
            .setSnapshot([{ data: 'test-snapshot' }])
        
        expect(targetGrafanaQuery).toBeInstanceOf(TargetGrafanaQuery);
        expect(targetGrafanaQuery.asJson()).toEqual({
        });
    });
});