let nameSet = new Set();
nameSet.add("Junior");
nameSet.add("Pinheiro").add("Ferreira"); //Aninhando os add.
let nameSet2 = new Set(["irineu", "pedin", "seucuca"]);
console.log(nameSet);
console.log(nameSet2);
console.log(nameSet.has("Junior")); //verificando se existe.
//principais métodos.
nameSet.delete("Pinheiro");
nameSet.size;
nameSet.clear;
//iterando
for (let aux of nameSet2) {
    console.log(aux);
}
console.log("-----------");
nameSet2.forEach(value => console.log(value));
//# sourceMappingURL=main.js.map