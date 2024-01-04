const handleSubmit = require("../src/clientSrc/JS/formHandler.js");

// test("should properly handles submit", () => {
//   expect(handleSubmit()).toBeDefined();
// });

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
