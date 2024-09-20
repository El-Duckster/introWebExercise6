import { convertToUpperCase } from './convertToUpperCase.js';

describe('convertToUpperCase', () => {
    test('converts lowercase text to uppercase', () => {
        const inputText = "hej";
        const result = convertToUpperCase(inputText);
        expect(result).toBe("HEJ");
    });

    test('leaves already uppercase text unchanged', () => {
        const inputText = "HELLO";
        const result = convertToUpperCase(inputText);
        expect(result).toBe("HELLO");
    });

    test('converts mixed case text to uppercase', () => {
        const inputText = "HeLLo WoRlD";
        const result = convertToUpperCase(inputText);
        expect(result).toBe("HELLO WORLD");
    });

    test('returns empty string when input is empty', () => {
        const inputText = "";
        const result = convertToUpperCase(inputText);
        expect(result).toBe("");
    });
});