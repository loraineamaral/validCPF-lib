let chai = require("chai");
let expect = chai.expect;
let cpfNumber = require("../lib/index");

describe("cpfValidator", () => {
  it("Testa CPF Inválido", () => {
    expect(cpfNumber("12345678910")).to.equal(false);
  });
  it("Testa CPF Válido", () => {
    expect(cpfNumber("12345678909")).to.equal(true);
  });
  it("Testa comprimento grande para CPF", () => {
    expect(cpfNumber("123456789091")).to.equal(false);
  });
  it("Testa comprimento pequeno para CPF", () => {
    expect(cpfNumber("12345678")).to.equal(false);
  });
  it("Testa se números são todos iguais", () => {
    expect(cpfNumber("22222222222")).to.equal(false);
  });
  it("Testa se CPF tem letras", () => {
    expect(cpfNumber("123456789re")).to.equal(false);
  });
});


