function printName(person) {
    console.log(person.name);
}
let randomObj = { name: "Junior", age: 20 };
let randomObj2 = { age: 20 };
let pe = { name: "Junior" };
let emp = { name: ".", salary: 2000 };
printName(pe);
printName(emp);
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2({ name: "teste" }); //funciona com o casting haha
let manager = { name: "Irineu", salary: 2000, bonus: 5 };
//# sourceMappingURL=interfaces.js.map