import { describe, it, expect } from 'vitest';
import { TargetTestDataQuery } from './TargetTestDataQuery.js';

describe('TargetTestDataQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a TargetTestDataQuery', () => {
        const targetTestDataQuery = new TargetTestDataQuery(defaultMetaOptions)

        expect(targetTestDataQuery).toBeInstanceOf(TargetTestDataQuery);
        expect(targetTestDataQuery.asJson()).toEqual({
        });
    });
    it('should create a TargetTestDataQuery with properties', () => {
        const targetTestDataQuery = new TargetTestDataQuery(defaultMetaOptions)
            .setAlias('test-alias')
            .setChannel('test-channel')
            .setCsvContent('test-csv-content')
            .setCsvFileName('test-csv-file-name')
            .addNewCsvWaveItem(
                csvWave => csvWave
            )
            .setDropPercent(10)
            .setErrorSource('test-error-source')
            .setErrorType('test-error-type')
            .setFlamegraphDiff(true)
            .setLabels('test-labels')
            .setLevelColumn(true)
            .setLines(5)
            .setMax(100)
            .setMin(0)
            .setNoise(0.1)
            .withNodes(
                nodes => nodes
            )
            .withPulseWave(
                pulseWave => pulseWave
            )
            .setRawFrameContent('test-raw-frame-content')
            .setScenarioId('test-scenario-id')
            .setSeriesCount(3)
            .withSim(
                sim => sim
            )
            .setSpanCount(2)
            .setSpread(1)
            .setStartValue(0)
            .withStream(
                stream => stream
            )
            .setStringInput('test-string-input')
            .withUsa(
                usa => usa
            )
            .setWithNil(false)

        expect(targetTestDataQuery).toBeInstanceOf(TargetTestDataQuery);
        expect(targetTestDataQuery.asJson()).toEqual({
            alias: "test-alias",
            channel: "test-channel",
            csvContent: "test-csv-content",
            csvFileName: "test-csv-file-name",
            csvWave: [
                {},
            ],
            dropPercent: 10,
            errorSource: "test-error-source",
            errorType: "test-error-type",
            flamegraphDiff: true,
            labels: "test-labels",
            levelColumn: true,
            lines: 5,
            max: 100,
            min: 0,
            nodes: {

            },
            pulseWave: {

            },
            noise: 0.1,
            rawFrameContent: "test-raw-frame-content",
            scenarioId: "test-scenario-id",
            seriesCount: 3,
            sim: {

            },
            spanCount: 2,
            spread: 1,
            startValue: 0,
            stream: {

            },
            stringInput: "test-string-input",
            usa: {

            },
            withNil: false,
        });
    });
});