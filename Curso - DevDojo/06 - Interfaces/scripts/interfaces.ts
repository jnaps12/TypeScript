function printName(person: {name:string}):void{
  console.log(person.name);
}

let randomObj = {name:"Junior", age: 20};
let randomObj2 = {age: 20};

// printName(randomObj);

//interfaces

interface Person{
  name: string;
  age?: number; //a '?' server para dizer que não é obrigado.
}
interface Employee extends Person{
  salary: number;
}

let pe: Person = {name: "Junior"};
let emp: Employee = { name: ".", salary: 2000 };

printName(pe);
printName(emp);

function printName2(person: Person): void {
  console.log(person.name);
}

printName2(pe);
printName2(emp);
printName2({name:"teste"} as Employee); //funciona com o casting haha

//caso queira add outra atributo na interface é só repetir ela e adiciona:
interface Person{
  age2?: number;
}
interface Manager extends Employee{
  readonly bonus: number; //com "readonly" vc pode colocar o valor no momento da ciração, mas não pode alterar depois
}

let manager: Manager = {name: "Irineu", salary: 2000, bonus: 5}