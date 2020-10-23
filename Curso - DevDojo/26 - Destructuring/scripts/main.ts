let person = {name: "Junior", lastname: "Pinheiro"};
let name1 = person.name;
let lastname1 = person.lastname;

console.log(name1);
console.log(lastname1);
console.log("\n")
//fazendo destructuring
//colocando name em name2, lastname em lastname2 tudo que tem em person.
let {name: name2, lastname: lastname2} = person;
console.log(name2);
console.log(lastname2);
console.log("\n");


//fazendo a mesma coisa só que com arrays.
let array = ["Teste", "irineu"];
let[a,b] = array;
console.log(a);
console.log(b);


class Person{
  constructor(public name:string){

  }
}

function example(person: Person): void {
  console.log(person.name);
}
//embaixo faz a mesma coisa que o de cima
function example2({name}): void { //Funciona pois o atributo name existe na classe Person.
  console.log(name);
}

example(new Person("kdjsflkjfd"));
example2({name: "Maria"});