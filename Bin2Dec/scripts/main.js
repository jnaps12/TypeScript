function binToDec() {
    let bin = document.getElementById("binarios").value;
    ;
    let exponent = bin.length - 1;
    let cont = 0;
    let resultDec = 0;
    while (cont < bin.length) {
        resultDec = resultDec + Number(bin[cont]) * Math.pow(2, exponent);
        exponent--;
        cont++;
    }
    showResult(resultDec);
}
let showResult = (result) => {
    document.getElementById('result').innerHTML = String(result);
};
//# sourceMappingURL=main.js.map