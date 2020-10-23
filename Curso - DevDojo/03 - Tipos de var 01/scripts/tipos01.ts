let p = document.createElement('p'); //criando elemento
//tipos de ver
let num : number = 10;
let bool : boolean = true;
let str : string = 'Junior';
let str2 : string = `${str} is so handsome
and cool.`; //isso é um template message, vc pode pular linha com ele.

function  func():void{} //void é um tipo primitivo, tipo um null. (quer dizer que a função não vai retornar nada.)
if(bool !== null){}
if(bool !== undefined){}

let list: number[] = [1,2,3];
let list2: Array<number> = [1, 2, 3];

let tuple: [string, number];
tuple =["string", 22]; //tupla *---*

console.log(tuple[0]);
enum Day{Monday, Tuesday} // declarando um novo tipo especifido
let dia: Day = 1; //utilizando o tipo declarado em cima
let dia2: Day = Day.Tuesday; //outra forma de usar

console.log("\n"+ dia+ ", "+ dia2); // assim ele imprime o valor da posição.
console.log("\n" + Day[0]); //Assim ele imprime a string.
p.textContent = str2;
document.body.appendChild(p);
