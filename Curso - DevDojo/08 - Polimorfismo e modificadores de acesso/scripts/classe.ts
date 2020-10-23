class Person {
  public name: string;
  protected _age: number;

  constructor(name: string) {
    this.name = name;
  }

  get age(): number{
    return this._age;
  }
  set age(value: number){
    this._age = value;
  }

  print(): void {
    console.log(`Name is: ${this.name}`);
  }
}

class Employee extends Person {
  salary: number;
  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }

  print(): void {
    console.log(`Name is: ${this.name} and salary: ${this.salary}`);
  }
}

let p1 = new Person("irineu");
let ep1 = new Employee("irineu2", 2000);
p1.print();

//let p2 = {name: "string"} as Person; //uma forma instanciar um objeto;
let p2 = <Person>{}; //outra forma de instanciar

let p3: Person = new Employee("Jorgin", 5000);
p3.print();