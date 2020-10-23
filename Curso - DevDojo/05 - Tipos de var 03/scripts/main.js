let var1 = "Texto";
let stringLength = var1.length; //forma1 de fazer Casting
let stringUpperCase = var1.toUpperCase(); //forma 2 de fazer casting.
console.log(stringLength);
console.log(stringUpperCase);
function add(v1, v2) {
    let sum = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add("sum is: ", [1, 2, 3, 4]);
function add2(v1, ...v2) {
    let sum = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add2("sum is: ", 1, 2, 3, 4); //e é assim que é passado um rest paramenter, note q é meio que um array, mas n é array.
//# sourceMappingURL=main.js.map