import { describe, it, expect } from 'vitest';
import { toTitleCase } from '../../src/utils/string';

describe('toTitleCase', () => {
    it('should convert a single word to title case', () => {
        expect(toTitleCase('hello')).toBe('Hello');
    });

    it('should convert multiple words to title case', () => {
        expect(toTitleCase('hello world')).toBe('Hello World');
    });

    it('should handle mixed case input', () => {
        expect(toTitleCase('hELLo wORLD')).toBe('Hello World');
    });

    it('should handle empty strings', () => {
        expect(toTitleCase('')).toBe('');
    });

    it('should handle strings with punctuation', () => {
        expect(toTitleCase('hello, world!')).toBe('Hello, World!');
    });
});