import { describe, it, expect } from 'vitest';
import { DataTransformation } from './DataTransformation.js';

describe('DataTransformation', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a DataTransformation', () => {
        const dataTransformation = new DataTransformation(defaultOptions)
        
        expect(dataTransformation).toBeInstanceOf(DataTransformation);
        expect(dataTransformation.asJson()).toEqual({
        });
    });
});