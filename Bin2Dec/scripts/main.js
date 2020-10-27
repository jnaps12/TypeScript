let bin = "110000110101000";
let exponent = bin.length - 1;
let cont = 0;
let resultDec = 0;
while (cont < bin.length) {
    resultDec = resultDec + Number(bin[cont]) * Math.pow(2, exponent);
    exponent--;
    cont++;
}
console.log(resultDec);
//# sourceMappingURL=main.js.map