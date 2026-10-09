import { describe, it, expect } from 'vitest';
import { InfluxQueryPart } from './InfluxQueryPart.js';

describe('InfluxQueryPart', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a InfluxQueryPart', () => {
        const influxQueryPart = new InfluxQueryPart(defaultMetaOptions)
        
        expect(influxQueryPart).toBeInstanceOf(InfluxQueryPart);
        expect(influxQueryPart.asJson()).toEqual({
        });
    });
    it('should create a InfluxQueryPart with properties', () => {
        const influxQueryPart = new InfluxQueryPart(defaultMetaOptions)
            .setType("time")
            .addParam("$__interval")
            .addParam("other param")
        
        expect(influxQueryPart).toBeInstanceOf(InfluxQueryPart);
        expect(influxQueryPart.asJson()).toEqual({
            type: "time",
            params: [
                "$__interval", 
                "other param"
            ]
        });
    });
});