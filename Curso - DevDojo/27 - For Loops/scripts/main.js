let array = ["Junior", "Pinheiro", "Ferreira"];
//Exitem 4 tipos de For
//primeiro tipo
console.log("1 --------------- ");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("2 ------------------ ");
//segundo tipo
array.forEach((name) => {
    console.log(name);
    //não dá pra utilizar break, continue e nem return.
});
console.log("3 ------------------ ");
//terceiro tipo
let person = { name: "irineu", lastname: "da silva" };
for (let prop in person) {
    console.log(prop); //vai retornar chave e não valor
}
for (let prop in array) {
    console.log(prop); //vai retornar chave e não valor
}
console.log("4 ------------------ ");
//Quarto tipo
for (let prop of array) {
    console.log(prop); //vai retornar valor
}
//# sourceMappingURL=main.js.map