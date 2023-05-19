const capitalize = require('../Task-4/capitalize');

test('capitalize function capitalizes first letter of string', () => {
    // Arrange
    const string = 'hello world';
  
    // Act
    const result = capitalize(string);
  
    // Assert
    expect(result).toBe('Hello world');
  });