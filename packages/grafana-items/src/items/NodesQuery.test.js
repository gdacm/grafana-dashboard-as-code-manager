import { describe, it, expect } from 'vitest';
import { NodesQuery } from './NodesQuery.js';

describe('NodesQuery', () => {
    const defaultMetaOptions = {
        text: 'Test options'
    };

    it('should create a NodesQuery', () => {
        const nodesQuery = new NodesQuery(defaultMetaOptions)
        
        expect(nodesQuery).toBeInstanceOf(NodesQuery);
        expect(nodesQuery.asJson()).toEqual({
        });
    });
});