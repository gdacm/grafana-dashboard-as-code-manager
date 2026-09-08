import { describe, it, expect } from 'vitest';
import { Annotation } from './Annotation.js';

describe('Annotation', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create an annotation', () => {
        const annotation = new Annotation(defaultOptions)
            .setBuiltIn(8)
            .setNewDatasource(
                datasource => datasource
                    .setType('someDatasourceType')
                    .setUid('erk78plaf124')
            )
            .setEnable(true)
            .setHide(true)
            .setIconColor('red')
            .setName('someAnnotationName')
            .setType('someAnnotationType')

        expect(annotation).toBeInstanceOf(Annotation)

        expect(annotation.asJson()).toEqual({
            builtIn: 8,
            datasource: {
                type: 'someDatasourceType',
                uid: 'erk78plaf124'
            },
            enable: true,
            hide: true,
            iconColor: 'red',
            name: 'someAnnotationName',
            type: 'someAnnotationType'
        })
    });
});