const { add, divide } = require("../lib/calc.js");

test("test passed ", function () {
  const num1 = 10;
  const num2 = 5;

  const result = add(num1, num2);
  expect(result).toBe(15);
});

test("test unpassed", function () {
  const num1 = "Hallo";
  const num2 = 5;

  expect(() => {
    add(num1, num2);
  }).toThrow("Ini harus angka yaa!");
});

test("test passed ", function () {
  const num3 = 10;
  const num4 = 5;

  const result2 = divide(num3, num4);
  expect(result2).toBe(2);
});

test("test unpassed", function () {
  const num1 = "Hallo";
  const num2 = 5;

  expect(() => {
    add(num1, num2);
  }).toThrow("Ini harus angka yaa!");
});
