let nameAge = new Map<string, number>();
nameAge.set("irineu", 50);
nameAge.set("Jr", 21);

console.log(nameAge)

let nameAge2 = new Map<string, number>().set("pedinMatador", 25).set("killua", 14); 
console.log(nameAge2);

let list = new Map<string,number>([
  ["Teste", 20],["curso", 32],["teste2", 25]
]);

console.log(list);
list.get("Teste"); //vai retornar o valor pela chave.
list.has("Teste"); //retorna se a chave existe ou não.
list.delete("Teste"); //vai deletar a chave e retornar true se deletou.
//iterando 
console.log("<------------------->");

//iterando sobre as chaves/keys
for(let key of list.keys()){
  console.log(key);
}
//Iterando sobre os values/valores
for(let v of list.values()){
  console.log(v);
}
//Iterando sobre as entradas
for(let entry of list.entries()){
  console.log(entry[0] + ' e ' + entry[1]); //ele vai funcionar como um vetor
}
//OBS: se vc não especificar o formato, ele vai iterar como o "entries".

//desestruturação
for(let [key, value] of list.entries()){
  console.log(key + ' e ' + value);
}

list.clear(); //vai apagar tudo. :D
list.size; //vai retornar o tamanho;