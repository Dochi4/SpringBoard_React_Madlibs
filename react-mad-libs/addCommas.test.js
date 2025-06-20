const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("Output is a string", () => {
    expect(typeof addCommas(12)).toBe("string");
  });

  test("Output is '1,234'", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("Output is '1,000,000'", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("Output is '9,876,543,210'", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("Output is '6'", () => {
    expect(addCommas(6)).toBe("6");
  });

  test("Output is '-10'", () => {
    expect(addCommas(-10)).toBe("-10");
  });

  test("Output is '-5,678'", () => {
    expect(addCommas(-5678)).toBe("-5,678");
  });

  test("Output is '12,345.678'", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
  });

  test("Output is '-3,141,592.65'", () => {
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
