const caesarCipher = require('../src/caesarCipher');

test('shifts characters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('AbC', 2)).toBe('CdE');
});

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('handles negative shifts', () => {
  expect(caesarCipher('abc', -3)).toBe('xyz');
  expect(caesarCipher('XYZ', -3)).toBe('UVW');
});

test('leaves non-alphabetical characters unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(caesarCipher('123!@#', 3)).toBe('123!@#');
  expect(caesarCipher('This is a test!', 5)).toBe('Ymnx nx f yjxy!');
});

test('handles large shift values', () => {
  expect(caesarCipher('abc', 52)).toBe('abc');
  expect(caesarCipher('xyz', 29)).toBe('abc');
});
