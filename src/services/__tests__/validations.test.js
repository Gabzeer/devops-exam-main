const { isEmpty, validateGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validateGamerTag", () => {

    test('should return false for a gamer tag less than 8 characters', () => {
        const invalidGamerTag = 'Pl4y3r';
        expect(validateGamerTag(invalidGamerTag)).toBe(false);
    });
    
    test('should return false for a gamer tag without a special character', () => {
        const invalidGamerTag = 'Player1';
        expect(validateGamerTag(invalidGamerTag)).toBe(false);
    });
    
    test('should return false for a gamer tag without a number', () => {
        const invalidGamerTag = 'Player#';
        expect(validateGamerTag(invalidGamerTag)).toBe(false);
    });
});
