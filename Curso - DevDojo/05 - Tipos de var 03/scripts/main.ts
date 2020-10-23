let var1: any = "Texto";
let stringLength: number = (<string> var1).length; //forma1 de fazer Casting
let stringUpperCase: string = (var1 as string).toUpperCase(); //forma 2 de fazer casting.

console.log(stringLength);
console.log(stringUpperCase);

function add(v1:string, v2:number[]): void{
  let sum:number = 0;
  for(let i=0; i<v2.length; i++){
    sum += v2[i];
  }
  console.log(v1 + sum);
}

add("sum is: ", [1, 2, 3, 4]);

function add2(v1: string, ...v2: number[]): void { //"..." é o rest paramenter, TEM QUE SER O ULTIMP PARAMENTER, EE RECEBE UMA SEQ DE DADOS.
  let sum: number = 0;
  for (let i = 0; i < v2.length; i++) {
    sum += v2[i];
  }
  console.log(v1 + sum);
}

add2("sum is: ",1, 2, 3, 4); //e é assim que é passado um rest paramenter, note q é meio que um array, mas n é array.
