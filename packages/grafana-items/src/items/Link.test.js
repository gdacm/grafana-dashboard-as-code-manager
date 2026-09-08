import { describe, it, expect } from 'vitest';
import { Link } from './Link.js';

describe('Link', () => {
    const defaultOptions = {
        text: 'Test options'
    };

    it('should create a Link', () => {
        const link = new Link(defaultOptions)
        
        expect(link).toBeInstanceOf(Link);
        expect(link.asJson()).toEqual({
            tags: [],
            type: 'link',
        });
    });
    it('should create a Link with properties', () => {
        const link = new Link(defaultOptions)
            .setAsDropdown(false)
            .setIcon('😏')
            .setIncludeVars(false)
            .setKeepTime(true)
            .setTargetBlank(true)
            .setTitle('Test Title')
            .setTooltip('Test Tooltip')
            .setUrl('https://example.com')
        
        expect(link).toBeInstanceOf(Link);
        expect(link.asJson()).toEqual({
            asDropdown: false,
            icon: '😏',
            includeVars: false,
            keepTime: true,
            targetBlank: true,
            tags: [],
            title: 'Test Title',
            tooltip: 'Test Tooltip',
            type: 'link',
            url: 'https://example.com',
        });
    });
});