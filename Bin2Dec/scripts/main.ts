function binToDec(): void {
  let bin: string = document.getElementById("binarios").value;
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

function validaNum(): void {
  let numeros = document.getElementById("binarios").value;
  let valid: boolean = true;

  for(let cont = 0; cont < numeros.length; cont++){
    if(numeros[cont] != '0' && numeros[cont] != '1'){
      valid = false;
    }
  }
  
  let msg = document.querySelector(".msg");
  if(!valid){
    document.getElementById('button').style.display = 'none';
    msg.textContent = "* Só são permitidos 0's e 1's *";
  }else{
    document.getElementById("button").style.display = "inline";
    msg.textContent = ''
  }
  

}