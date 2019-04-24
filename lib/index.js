function cpfValidator(cpf) {
  let cpfArray = cpf.split("")

  if (cpfArray.length !== 11 || cpfArray.every(elem => elem == cpfArray[0])) {
    return "CPF Inválido"}
  
  const firstDigit = parseInt(cpfArray[9]);
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
  const secondDigit = parseInt(cpfArray[10]);
  let totalTwo = 11
  const resultCPFTwo = (arrayToValidate.reduce((sum, number) => (sum + (number * totalTwo--)), 0)) + (checkerDigitOne*2)
  let checkerDigitTwo = 0;

  if (11 - (resultCPFTwo % 11) > 9) {
    checkerDigitTwo = 0
  } else {
    checkerDigitTwo = 11 - (resultCPFTwo % 11)
  }
  if (checkerDigitOne === firstDigit && checkerDigitTwo === secondDigit) {
    console.log("entrou valido")
    return "CPF Válido"
  }
  if (checkerDigitOne !== firstDigit || checkerDigitTwo !== secondDigit) {
    console.log("entrou invalido")
    return "CPF Inválido"
  }
}
module.exports.cpfValidator = cpfValidator;