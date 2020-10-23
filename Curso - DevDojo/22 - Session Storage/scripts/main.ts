let key = "key1";
let key2 = "key2";
// console.log(sessionStorage.getItem(key));
// console.log(sessionStorage.getItem(key2));

sessionStorage.setItem(key, "Junior"); //setar item com (chave, valor)
sessionStorage.setItem(key2, "Pinheiro");

// console.log(sessionStorage.getItem(key));
// console.log(sessionStorage.getItem(key2));

//pegando tudo que tem na sessão
for(let i=0; i < sessionStorage.length; i++){
  console.log(sessionStorage.getItem(<string> sessionStorage.key(i)));
}

//removenod um
sessionStorage.removeItem(key);
//limpando tudo
sessionStorage.clear();

