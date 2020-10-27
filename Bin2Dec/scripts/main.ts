let bin: string = "110000110101000";
let exponent: number = bin.length - 1;
let cont: number = 0;
let resultDec: number = 0;

while (cont < bin.length) {
  resultDec = resultDec + Number(bin[cont]) * Math.pow(2, exponent);
  exponent--;
  cont++;
}

console.log(resultDec);
