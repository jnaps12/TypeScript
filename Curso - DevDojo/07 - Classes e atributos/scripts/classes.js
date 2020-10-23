class Person {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`Name is: ${this.name}`);
    }
}
class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
    print() {
        console.log(`Name is: ${this.name} and salary: ${this.salary}`);
    }
}
let p1 = new Person("irineu");
let ep1 = new Employee("irineu2", 2000);
p1.print();
//let p2 = {name: "string"} as Person; //uma forma instanciar um objeto;
let p2 = {}; //outra forma de instanciar
//# sourceMappingURL=classes.js.map