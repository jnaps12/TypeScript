function binToDec(): void {
  let bin: string = document.getElementById("binarios").value;;
  let exponent: number = bin.length - 1;
  let cont: number = 0;
  let resultDec: number = 0;

  while (cont < bin.length) {
    resultDec = resultDec + Number(bin[cont]) * Math.pow(2, exponent);
    exponent--;
    cont++;
  }

  showResult(resultDec);
}

let showResult = (result: number): void => {
  document.getElementById('result').innerHTML = String(result);
}

