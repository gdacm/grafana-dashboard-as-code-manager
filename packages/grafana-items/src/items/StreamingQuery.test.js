import { describe, it, expect } from 'vitest';
import { StreamingQuery } from './StreamingQuery.js';

describe('StreamingQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a StreamingQuery', () => {
        const streamingQuery = new StreamingQuery(defaultMetaOptions)
        
        expect(streamingQuery).toBeInstanceOf(StreamingQuery);
        expect(streamingQuery.asJson()).toEqual({
        });
    });
    it('should create a StreamingQuery', () => {
        const streamingQuery = new StreamingQuery(defaultMetaOptions)
            .setBands(1)
            .setNoise(2)
            .setSpeed(3)
            .setSpread(4)
            .setType('test-type')
            .setUrl('http://test-url') 
        
        expect(streamingQuery).toBeInstanceOf(StreamingQuery);
        expect(streamingQuery.asJson()).toEqual({
            bands: 1,
            noise: 2,
            speed: 3,
            spread: 4,
            type: 'test-type',
            url: 'http://test-url',
        });
    });
});