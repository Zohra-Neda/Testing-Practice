const stringLength = require('../Task-1/stringLength');

// test for original function
 describe("stringLength", () => {
    test("returns the correct length of a string", () => {
      expect(stringLength("hello")).toBe(5);
    });
  });

   // tests for expanded function
   describe("stringLength", () => {
    test("returns the correct length of a valid string", () => {
      expect(stringLength("hello")).toBe(5);
    });
  
    test("throws an error if the string is too short", () => {
      expect(() => {stringLength("")}).toThrowError(
        "String must be between 1 and 10 characters long"
      );
    });
  
    test("throws an error if the string is too long", () => {
      expect(() => {stringLength("this is too long")}).toThrowError(
        "String must be between 1 and 10 characters long"
      );
    });
  });