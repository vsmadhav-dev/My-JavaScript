function NumberMasker(number) {
    let splitNumber = number;
    let firstNumber = splitNumber[0];
    let lastTwoNumber = splitNumber.slice(-2);

    let maskedNumber = "*".repeat(splitNumber.length -3);
    let maskedNumber2 = splitNumber[0] + maskedNumber + lastTwoNumber;
    return maskedNumber2;
}
console.log(NumberMasker("9212048993"));