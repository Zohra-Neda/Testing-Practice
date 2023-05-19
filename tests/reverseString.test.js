// Import the function to be tested
const reverseString = require('../Task-2/reverseString');

describe('reverseString', () => {
  test('should reverse a string', () => {
    // Arrange
    const string = 'hello';

    // Act
    const reversedString = reverseString(string);

    // Assert
    expect(reversedString).toBe('olleh');
  });

  test('should return an empty string if an empty string is passed', () => {
    // Arrange
    const string = '';

    // Act
    const reversedString = reverseString(string);

    // Assert
    expect(reversedString).toBe('');
  });

  test('should throw an error if no argument is passed', () => {
    // Arrange

    // Act and Assert
    expect(() => reverseString()).toThrowError();
  });
});
