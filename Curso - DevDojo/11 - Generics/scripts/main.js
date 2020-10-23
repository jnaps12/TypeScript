//Generics é quando você não sabe o tipo da função e ainda assim quer trabalhar com um tipo seguro de dados.
//no exemplo abaixo o "T" é um tipo que ainda não axiste.
function reverseList(list) {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ["irineu", "jr", "naosei"];
let numbers = [1, 2, 3, 4, 5];
let reversedNames = reverseList(names);
let reversedNum = reverseList(numbers);
console.log(reversedNames);
console.log(reversedNum);
let reversedListArrow = (list) => {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};
//# sourceMappingURL=main.js.map