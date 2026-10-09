import { describe, it, expect } from 'vitest';
import { TimeRegionConfig } from './TimeRegionConfig.js';

describe('TimeRegionConfig', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a TimeRegionConfig', () => {
        const timeRegionConfig = new TimeRegionConfig(defaultMetaOptions)
        
        expect(timeRegionConfig).toBeInstanceOf(TimeRegionConfig);
        expect(timeRegionConfig.asJson()).toEqual({
        });
    });
    it('should create a TimeRegionConfig with properties', () => {
        const timeRegionConfig = new TimeRegionConfig(defaultMetaOptions)
            .setCronExpr('0 0 * * *')
            .setDuration('1h')
            .setFrom('2024-01-01T00:00:00Z')
            .setFromDayOfWeek(1)
            .setMode('cron')
            .setTimezone('UTC')
            .setTo('2024-01-01T01:00:00Z')
            .setToDayOfWeek(1)
        
        expect(timeRegionConfig).toBeInstanceOf(TimeRegionConfig);
        expect(timeRegionConfig.asJson()).toEqual({
            cronExpr: '0 0 * * *',
            duration: '1h',
            from: '2024-01-01T00:00:00Z',
            fromDayOfWeek: 1,
            mode: 'cron',
            timezone: 'UTC',
            to: '2024-01-01T01:00:00Z',
            toDayOfWeek: 1
        });
    });
});