function doingSomething(callback: (name: string) => void): void {
  //formas de chamar o callback.
  callback.call(this, "Junior");
  callback.apply(this, ["irineu", "junior"]); //ele só vai pega o primeiro e ignorar o resto.
  callback("Junior");
}

function execute(name: string): void {
  console.log(name);
}

doingSomething(execute); //o doing comething é um callback, ele recebe uma função como paremetro.
//a função execute será executada através da doingSomething.

function calculator(num: number, num2:number, type: string): number {
  switch (type) {
    case "add": return num + num2;
    case "multiply": return num * num2;
    default: return 0;

  }
}

function add(num: number, num2: number):number{
  return num+num2;
}
function multiply(num: number, num2: number): number {
  return num * num2;
}

function calculator2(num: number, num2: number, callback):number{
  if(typeof(callback) === "function"){
    return callback(num, num2);
  }
  return 0;
}

function calculator3(num: number, num2: number, callback:(num1:number, num2:number)=>number): number {
  return callback(num,num2);
  
}

console.log(calculator(1,2,"add"));
console.log(calculator2(5,5,add)); //chamando a função add através da calculator2.
console.log(calculator3(5, 10, (num1:number, num2:number) => {
  return num1-num2;
}));