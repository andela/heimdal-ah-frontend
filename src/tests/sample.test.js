const add = (a, b) => a + b;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toEqual(7);
});
