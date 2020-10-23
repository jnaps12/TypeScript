//Generics é quando você não sabe o tipo da função e ainda assim quer trabalhar com um tipo seguro de dados.
//no exemplo abaixo o "T" é um tipo que ainda não axiste.
function reverseList<T>(list:Array<T>): Array<T>{
  let reversedList: T[] = [];
  for(let i = list.length-1; i >= 0; i--){
    reversedList.push(list[i]);
  }

  return reversedList;
}

let names = ["irineu", "jr", "naosei"];
let numbers = [1,2,3,4,5];
let reversedNames = reverseList<String>(names);
let reversedNum = reverseList<number>(numbers);

console.log(reversedNames);
console.log(reversedNum);

let reversedListArrow = <T>(list: Array<T>): Array<T> => {
  let reversedList: T[] = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }

  return reversedList;
}
