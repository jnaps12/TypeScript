type Primitive = string | boolean | number | bigint | symbol | null | undefined;

/**
 * ### QUALQUER OUTRO TIPO É NÃO PRIMITIVO
 *  - Object (nativo do JavaScript, não deve ser usado para tipagem)
 *  - object (pode se rusado para tipagem)
 *  - Class
 *  - Qualquer outra modelagem de object
 */

/*### TIPOS IMPLÍCITOS E EXPLÍCITOS */

const impl_string = "typescript";
const impl_number = 5.5;
const impl_boolean = true;
const impl_obj = { name: "typescript" };

const expl_string: string = "typescript";
const expl_number: number = 5.5;
const expl_boolean: boolean = true;
const expl_obj: { name: string } = { name: "typescript" };

/*### Interface */
interface AddressInterface {
  address: string;
  city: string;
}

interface UserInterface {
  firstName: string;
  lastName: string;
  fullName: () => string;
  address?: AddressInterface;
}

const obj: UserInterface = {
  firstName: "Irineu",
  lastName: "vc n sabe nem eu",
  fullName: () => {
    //this não é suportado dentro de arrow functions :<
    return `${obj.firstName} ${obj.lastName}`;
  },
  //address não é obrigatório.
  address: {
    address: "rua y",
    city: "Senhor do Bonfim",
  },
};

console.log(obj.fullName());

//### Logical Assignment

/**
 * FALSY CASES;
 * if (false)
 *if (null)
 *if (undefined)
 *if (0)
 *if (-0)
 *if (0n)
 *if (NaN)
 *if ("")
 **/

//AND Assignment
//The logical AND assignment (a &&= b) operator only assigns if a is truthy:
let a = 1;
let b = 0;

a &&= 2;

//it does the same of

if (a) {
  a = 2;
}

//OR Assignment
//The logical OR assignment (x ||= y) operator only assigns if x is falsy:
let x = "";

x ||= "Irineu";

//it does the same of

if (!x) {
  x = "Irineu";
}

// Nulish coealescing
let teste = undefined;
let city = teste ?? "Sem cidade";
//Isso aqui é fazer a mesma coisa que:
city = teste ? teste : "Sem ciddade";

//Non-Null
const num1: number | undefined = undefined;

const num2: number = num1!; //o num2 por ser do tipo number não aceito o number1 por ser undefined, porém, com a ! sendo utilizada, você força a atribuição.

//### Funções

function soma(a: number, b?: number): number {
  return b ? a + b : a;
}

console.log(soma(1, 2));

//### CLASSES

interface BaseCrudInterface {
  create(data: object): void;
  fetch(filter: object): UserInterface[];
  find(id: string): UserInterface;
}

class UserCrud implements BaseCrudInterface {
  constructor(
    private name: string,
    private email: string,
    private password: string
  ) {}

  create(data: object): void {
    throw new Error("Method not implemented.");
  }
  fetch(filter: object): UserInterface[] {
    throw new Error("Method not implemented.");
  }
  find(id: string): UserInterface {
    throw new Error("Method not implemented.");
  }
}

