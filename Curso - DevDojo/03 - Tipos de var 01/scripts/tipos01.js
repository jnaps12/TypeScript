let p = document.createElement('p'); //criando elemento
//tipos de ver
let num = 10;
let bool = true;
let str = 'Junior';
let str2 = `${str} is so handsome
and cool.`; //isso é um template message, vc pode pular linha com ele.
function func() { } //void é um tipo primitivo, tipo um null. (quer dizer que a função não vai retornar nada.)
if (bool != null) { }
if (bool != undefined) { }
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let tuple;
tuple = ["string", 22]; //tupla *---*
console.log(tuple[0]);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
})(Day || (Day = {})); // declarando um novo tipo especifido
let dia = 1; //utilizando o tipo declarado em cima
let dia2 = Day.Tuesday; //outra forma de usar
console.log("\n" + dia + ", " + dia2); // assim ele imprime o valor da posição.
console.log("\n" + Day[0]); //Assim ele imprime a string.
p.textContent = str2;
document.body.appendChild(p);
//# sourceMappingURL=tipos01.js.map