// describe("testing name", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });
//   it("testing name", () => {
//     cy.get('input[name="name"]').type("William");
//   });
// });

describe("User onboarding tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  const textInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsInput = () => cy.get('[type="checkbox"]');
  const submitButton = () => cy.get("button[name=submit]");

  it("Text inputs are working", () => {
    textInput()
      .should("have.value", "")
      .type("Testing 123")
      .should("have.value", "Testing 123");
    emailInput("have.value", "")
      .type("test@test.com")
      .should("have.value", "test@test.com");
    passwordInput()
      .should("have.value", "")
      .type("123456")
      .should("have.value", "123456");
  });
  it("Submit test", () => {
    textInput().type("Testing 123").should("have.value", "Testing 123");
    emailInput().type("test@test.com").should("have.value", "test@test.com");
    passwordInput().type("123456").should("have.value", "123456");
    termsInput().check();
    submitButton().click();
  });
});
