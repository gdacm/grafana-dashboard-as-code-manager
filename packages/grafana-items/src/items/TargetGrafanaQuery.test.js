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
            .setSearch('test-search')
            .setSearchNext('test-search-next')
            .setSeriesCount(5)
        
        expect(targetGrafanaQuery).toBeInstanceOf(TargetGrafanaQuery);
        expect(targetGrafanaQuery.asJson()).toEqual({
            buffer: 1024,
            channel: 'test-channel',
            dropPercent: 0.5,
            file: {
                name: 'test-file-name',
                size: 2048
            },
            max: 100,
            min: 0,
            noise: 0.1,
            path: 'test-path',
            queryType: 'randomWalk',
            search: 'test-search',
            searchNext: 'test-search-next',
            seriesCount: 5
        });
    });
});