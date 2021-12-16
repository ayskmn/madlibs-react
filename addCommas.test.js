const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

  test("it works for integers", () => {
    expect(addCommas(6)).toBe("6");
    expect(addCommas(10)).toBe("10");
    expect(addCommas(932556)).toBe("932,556");
  });