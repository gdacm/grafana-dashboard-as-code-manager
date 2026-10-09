import { describe, it, expect } from 'vitest';
import { InfluxQueryTag } from './InfluxQueryTag.js';

describe('InfluxQueryTag', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a InfluxQueryTag', () => {
        const influxQueryTag = new InfluxQueryTag(defaultMetaOptions)
        
        expect(influxQueryTag).toBeInstanceOf(InfluxQueryTag);
        expect(influxQueryTag.asJson()).toEqual({
        });
    });
    it('should create a InfluxQueryTag with properties', () => {
        const influxQueryTag = new InfluxQueryTag(defaultMetaOptions)
            .setKey("host")
            .setOperator("=")
            .setValue("localhost")
        
        expect(influxQueryTag).toBeInstanceOf(InfluxQueryTag);
        expect(influxQueryTag.asJson()).toEqual({
            key: "host",
            operator: "=",
            value: "localhost"
        });
    });
});