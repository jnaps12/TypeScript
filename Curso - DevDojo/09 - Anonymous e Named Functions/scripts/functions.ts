//na função abaixo, o parametro "val" é opcional, podendo ser passado ou não.
function printf(val: any): void{
  console.log(val);
}
printf("message here");

//fazendo função onde o parametro tem valor default
function printOrNot(flag:boolean = true): void{
  let str = flag ? "flag is true" : "flag is false";
  console.log(str);
}
//OBs: não é permitido usar opcional e parametro predefinido ao msm tempo.

//fazendo uma função anonima.
// sumAnonymous(1,2); esse tipo de função não pode ser chamada antes da declaração dela.
let sumAnonymous = function(n1: number, n2: number): void{
  console.log(`Sum: ${n1+n2}`);
}; //aqui precisa de ';'.

sumAnonymous(1,2); // executando a função anonymous.
printOrNot();

//ArrowFunctions ou lambdas
let sumArrow1 = (n1: number, n2: number) => n1+n2;
let sumArrow2 = (n1: number, n2: number) => {return n1 + n2}; //msm coisa de cima.

//retornando objeto
let sumObjectArrow = (name: string, surname: string) => ({name: name, surname: surname});


printf(sumArrow1(1,2));
printf(sumArrow2(1, 2));
printf(sumObjectArrow("jr", "Pinheiro"));

