//Arrays
let colors = ['blue', 'green', 'black'];
let myNumbers: number[] = [1, 2, 3];


//Object literal
let points: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Funciton
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//Nos exemplos anteriores não seria necessário tipar explicitamente, o própri TS já entenderia o tipo por inferência.

//SE DECLARARMOS UMA VARIÁVEL E NA MESMA LINHA INICIALIZARMOS ESSA VARIÁVEL EM UMA ÚNICA EXPRESSÃO, O TIPO INFERIDO NA VARIÁVEL SERA O TIPO DE DADO UTILIZADO NA INICIALIZAÇÃO.
//EXEMPLO:

let fruit = 'banana';
let ticket;
ticket = 123;

//fruit via ser string e ticket é do tipo any.

//QUANTO UTILIZAR TYPE ANOTATIONS, DECLARAR O TIPO EXPLICITAMENTE.
/**
 * 1º - Quando uma função return o tipo "any", e precisamos esclarecer o valor;
 * 2º - Quando declaramos uma variável e queremos inicializar ela somente mais a frente;
 * 3º - Quando queremos tipar uma variável que não pode ser inferida.
 */

// SEMPRE EVITE O TIPO ANY.
//Quando usar annotations
//1) Funciton that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates);

//2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i <words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; 
 
for(let i = 0; numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}
