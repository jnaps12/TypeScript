function doingSomething(callback) {
    //formas de chamar o callback.
    callback.call(this, "Junior");
    callback.apply(this, ["irineu", "junior"]); //ele só vai pega o primeiro e ignorar o resto.
    callback("Junior");
}
function execute(name) {
    console.log(name);
}
doingSomething(execute); //o doing comething é um callback, ele recebe uma função como paremetro.
//a função execute será executada através da doingSomething.
function calculator(num, num2, type) {
    switch (type) {
        case "add": return num + num2;
        case "multiply": return num * num2;
        default: return 0;
    }
}
function add(num, num2) {
    return num + num2;
}
function multiply(num, num2) {
    return num * num2;
}
function calculator2(num, num2, callback) {
    if (typeof (callback) === "function") {
        return callback(num, num2);
    }
    return 0;
}
function calculator3(num, num2, callback) {
    return callback(num, num2);
}
console.log(calculator(1, 2, "add"));
console.log(calculator2(5, 5, add)); //chamando a função add através da calculator2.
console.log(calculator3(5, 10, (num1, num2) => {
    return num1 - num2;
}));
//# sourceMappingURL=main.js.map