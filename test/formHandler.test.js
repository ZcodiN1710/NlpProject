const handleSubmit = require("../src/clientSrc/JS/formHandler.js");



describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
