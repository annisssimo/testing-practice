const reverseString = require('../src/reverseString');

test('takes a string and returns it reversed', () => {
  expect(reverseString('meow')).toBe('woem');
});

test('12345" becomes 54321', () => {
  expect(reverseString('12345')).toBe('54321');
});
