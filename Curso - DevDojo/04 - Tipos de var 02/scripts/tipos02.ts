function add(v1:number, v2:number, v3?:number): number{ //a "?" dps do paremetro, quer dizer que não é um paremetro obrigatorio, como no v3.
  if(v3 !== undefined) //precisa do if pra n dar erro na soma, já que não se soma um undefined.
    return v1 + v2 + v3; 
  return v1+v2;
}

function add2(v1:any, v2:any, v3?:any): any{ //"any" é quando vc não sabe o tipo que vai receber e retornar, ou seja qualquer tipo.
  if (v3 !== undefined) //precisa do if pra n dar erro na soma, já que não se soma um undefined.
    return v1 + v2 + v3;
  return v1 + v2;
}

console.log(add(2,2,5));
console.log(add2("teste", 2, 5));

//Tbm existe um tipo "void" e carrega os tipos "null" e "undefined".
