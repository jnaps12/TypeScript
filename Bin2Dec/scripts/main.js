function binToDec() {
    let bin = document.getElementById("binarios").value;
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
function validaNum() {
    let numeros = document.getElementById("binarios").value;
    let valid = true;
    for (let cont = 0; cont < numeros.length; cont++) {
        if (numeros[cont] != '0' && numeros[cont] != '1') {
            valid = false;
        }
    }
    let msg = document.querySelector(".msg");
    if (!valid) {
        document.getElementById('button').style.display = 'none';
        msg.textContent = "* Só são permitidos 0's e 1's *";
    }
    else {
        document.getElementById("button").style.display = "inline";
        msg.textContent = '';
    }
}
//# sourceMappingURL=main.js.map