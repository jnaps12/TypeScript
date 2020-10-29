// callback > promise > async/await
var require: any;
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
const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
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
const init = async () => {
  //uma função async() é uma promise.
  try {
    const contents = await readFile("./ini1.txt");
    const contents2 = await readFile("./ini2.txt");
    return String(contents) + '\n' + String(contents2);
  } catch (err) {
    console.log(err);
  }
};

init().then(contents => console.log(contents));

console.log(2);
console.log(3);
