function add(v1, v2, v3) {
    if (v3 !== undefined) //precisa do if pra n dar erro na soma, já que não se soma um undefined.
        return v1 + v2 + v3;
    return v1 + v2;
}
function add2(v1, v2, v3) {
    if (v3 !== undefined) //precisa do if pra n dar erro na soma, já que não se soma um undefined.
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(add(2, 2, 5));
console.log(add2("teste", 2, 5));
//Tbm existe um tipo "void" e carrega os tipos "null" e "undefined".
//# sourceMappingURL=tipos02.js.map