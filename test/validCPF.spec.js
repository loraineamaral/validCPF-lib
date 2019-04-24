let chai = require("chai");
let expect = chai.expect;
let chess = require("../lib/index");

describe("CPF-lib", () =>{
  describe("cpfValidator", () =>{
    it("CPF Inválido", () =>{
      expect(chess.chessBattle("12345678910")).to.equal("CPF Inválido");
    });
  });
});