function cpfValidator(cpf) {
  const cpfArray = cpf.split('');
  const areSameElements = cpfArray.every(elem => elem === cpfArray[0]);
  if (cpfArray.length !== 11 || areSameElements) {
    return false;
  }
  const cpfWithoutDigits = cpfArray.slice(0, 9);
  const resultCPFOne = cpfSum(cpfWithoutDigits, 10);
  const checkerDigitOne = getCheckDigit(resultCPFOne);
  const resultCPFTwo = cpfSum(cpfWithoutDigits, 11) + (checkerDigitOne * 2);
  const checkerDigitTwo = getCheckDigit(resultCPFTwo);
  const isFirstDigitValid = checkerDigitOne === parseInt(cpfArray[9]);
  const isSecondDigitValid = checkerDigitTwo === parseInt(cpfArray[10]);
  return isFirstDigitValid && isSecondDigitValid;
}
function cpfSum(cpfArray, decrement) {
  return cpfArray.reduce((sum, number) => sum + (number * decrement--), 0);
}
function getCheckDigit(resultCpf) {
  if (11 - (resultCpf % 11) > 9) {
    return 0;
  } else {
    return 11 - (resultCpf % 11);
  }
}

module.exports = cpfValidator;