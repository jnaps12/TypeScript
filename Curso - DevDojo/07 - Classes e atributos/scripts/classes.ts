class Person{
  name: string;

  constructor(name: string){
    this.name = name;
  }

  print():void{
    console.log(`Name is: ${this.name}`);
  }
}

class Employee extends Person{
  salary: number;
  constructor(name: string, salary: number){
    super(name);
    this.salary = salary;
  }

  print():void{
    console.log(`Name is: ${this.name} and salary: ${this.salary}`);
  }
}

let p1 = new Person("irineu");
let ep1 = new Employee("irineu2", 2000);
p1.print();

//let p2 = {name: "string"} as Person; //uma forma instanciar um objeto;
let p2 = <Person>{}; //outra forma de instanciar