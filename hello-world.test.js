const sayHello = require('./say-hello');

test('should returns \'A says "Hello!" to B\'', () => {
  expect(sayHello('A', 'B')).toBe('A says "Hello!" to B');
});

test('should returns \'Alice says "Hello!" to Bob\'', () => {
  expect(sayHello('Alice', 'Bob')).toBe('Alice says "Hello!" to Bob');
});

test('should returns \' says "Hello!" to \'', () => {
  expect(sayHello('', '')).toBe(' says "Hello!" to ');
});
