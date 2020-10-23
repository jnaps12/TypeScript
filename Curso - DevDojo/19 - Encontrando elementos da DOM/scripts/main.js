let element = document.getElementById("btn2"); //HTML Element é o tipo da let "element";
console.log(element);
let element2 = document.querySelector(".test");
console.log(element2);
let element3 = document.querySelector("#main");
console.log(element3);
let elements = document.getElementsByTagName("div"); //assim ele vai pegar todas as DIVs que existem.
console.log(elements); //É um vetor, dá pra pegar por posição, EX: elements[2];
let elements2 = document.querySelectorAll(".test"); //vai pegar todos os elements que tem a class '.test'
console.log(elements2); //É um vetor, dá pra pegar por posição, EX: elements2[2];
//Também existem: getElementByName(), 
//# sourceMappingURL=main.js.map