function cpfValidator(cpf) {
  let cpfArray = cpf.split("")

  if (cpfArray.length !== 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999") {
    return "CPF Inválido"
  }

  const firstDigit = cpfArray[9]
  const arrayToValidate = cpfArray.slice(0, 9)
  let totalOne = 10
  const resultCPFOne = arrayToValidate.reduce((sum, number) => sum + (number * totalOne--), 0)
  let checkerDigitOne = 0;

  if (11 - (resultCPFOne % 11) > 9) {
    checkerDigitOne = 0
  } else {
    checkerDigitOne = 11 - (resultCPFOne % 11)
  }
  // segundo dígito
  const secondDigit = cpfArray[10];
  let totalTwo = 11
  const resultCPFTwo = arrayToValidate.reduce((sum, number) => sum + (number * totalTwo--), 0)
  let checkerDigitTwo = 0;

  if (11 - (resultCPFTwo % 11) > 9) {
    checkerDigitTwo = 0
  } else {
    checkerDigitTwo = 11 - (resultCPFTwo % 11)
  }

  if (checkerDigitOne != firstDigit || checkerDigitTwo != secondDigit) {
    return "CPF Inválido"
  }
  if (checkerDigitOne === firstDigit && checkerDigitTwo === secondDigit) {
    return "CPF Válido"
  }
}

module.exports.cpfValidator = cpfValidator;