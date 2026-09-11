import { describe, it, expect } from 'vitest';
import { Dashboard } from './Dashboard.js';
import { TimePicker } from './TimePicker.js';

describe('Dashboard', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a Dashboard', () => {
        const dashboard = new Dashboard(defaultOptions)
            .setUid('dashboard-uid')

        expect(dashboard).toBeInstanceOf(Dashboard);
        expect(dashboard.asJson()).toEqual({
            annotations: {
                list: [
                    {
                        builtIn: 1,
                        datasource: {
                            type: 'grafana',
                            uid: '-- Grafana --'
                        },
                        enable: true,
                        hide: true,
                        "iconColor": "rgba(0, 211, 255, 1)",
                        name: 'Annotations & Alerts',
                        type: 'dashboard',
                    }
                ],
            },
            tags: [],
            templating: {},
            time: {
                from: 'now-6h',
                to: 'now'
            },
            timepicker: {},
            timezone: "browser",
            title: '',
            uid: 'dashboard-uid',
        });
    });
    it('should create a Dashboard with fields', () => {
        const dashboard = new Dashboard(defaultOptions)
            .setUid('dashboard-uid')
            .withAnnotations(
                annotations => annotations.list[0]
                    .setBuiltIn(9)
                    .setNewDatasource(
                        datasource => datasource
                            .setType('someType')
                            .setUid('someUid')
                    )
                    .setEnable(false)
                    .setHide(false)
                    .setIconColor("rgba(80, 111, 18, 80)")
                    .setName('some name')
                    .setType('someType')
            )
            .setTags(['tag1', 'tag2'])
            .setTimeRange('now-1h', 'now')
            .setTimepicker(
                new TimePicker(defaultOptions)
                    .addRefreshInterval('5s')
                    .addRefreshInterval('17s')
            )
            .setTimezone("someTimeZone")
            .setTitle('some title')

        expect(dashboard).toBeInstanceOf(Dashboard);
        expect(dashboard.asJson()).toEqual({
            annotations: {
                list: [
                    {
                        builtIn: 9,
                        datasource: {
                            type: 'someType',
                            uid: 'someUid'
                        },
                        enable: false,
                        hide: false,
                        iconColor: "rgba(80, 111, 18, 80)",
                        name: 'some name',
                        type: 'someType',
                    }
                ],
            },
            tags: ['tag1', 'tag2'],
            templating: {},
            time: {
                from: 'now-1h',
                to: 'now'
            },
            timepicker: {
                refresh_intervals: ['5s', '17s']
            },
            timezone: "someTimeZone",
            title: 'some title',
            uid: 'dashboard-uid',
        });
    })
});