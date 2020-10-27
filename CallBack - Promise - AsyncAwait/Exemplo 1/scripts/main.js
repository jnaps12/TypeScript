var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// callback > promise > async/await
var require;
const fs = require("fs");
console.log(1);
// CALLBACK
/* maneira um
function callback(err, contents): void{
  console.log(err, contents);
}*/
/* maneira 2
const callback = (err, contents): void => {
  console.log(err, contents);
};*/
//se eu só vou usar essa função aqui, então posso fazer uma função anônima.
// fs.readFile('./ini1.txt', (err, contents): void => {
//   console.log(err, contents);
// });
//PROMISE
const readFile = (file) => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(contents);
        }
    });
});
/*
readFile('./ini1.txt')
  .then(contents => {
    console.log(String(contents));
    return readFile('./ini2.txt');
  })
  .then(contents => {
    console.log(String(contents));
  });
*/
//ASYNC/AWAIT
const init = () => __awaiter(this, void 0, void 0, function* () {
    //uma função async() é uma promise.
    try {
        const contents = yield readFile("./ini1.txt");
        const contents2 = yield readFile("./ini2.txt");
        return String(contents) + '\n' + String(contents2);
    }
    catch (err) {
        console.log(err);
    }
});
init().then(contents => console.log(contents));
console.log(2);
console.log(3);
//# sourceMappingURL=main.js.map