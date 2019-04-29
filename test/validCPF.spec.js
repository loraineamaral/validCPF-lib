let chai = require("chai");
let expect = chai.expect;
let cpfNumber = require("../lib/index");

describe("cpfValidator", () => {
  it("Testa CPF Inválido", () => {
    expect(cpfNumber.cpfValidator("12345678910")).to.equal(false);
  });
  it("Testa CPF Válido", () => {
    expect(cpfNumber.cpfValidator("12345678909")).to.equal(true);
  });
  it("Testa comprimento grande do CPF", () => {
    expect(cpfNumber.cpfValidator("123456789091")).to.equal(false);
  });
  it("Testa comprimento pequeno do CPF", () => {
    expect(cpfNumber.cpfValidator("12345678")).to.equal(false);
  });
  it("Testa se números são todos iguais", () => {
    expect(cpfNumber.cpfValidator("22222222222")).to.equal(false);
  });
  it("Testa se CPF tem letras", () => {
    expect(cpfNumber.cpfValidator("123456789re")).to.equal(false);
  });
});


