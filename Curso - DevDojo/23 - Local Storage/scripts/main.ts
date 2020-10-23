//O localStorage tem os mesmo métodos que o session. LIMITE é de 5mb.
let key = "localStorageKey";
// localStorage.setItem(key, "Irineu");
console.log(localStorage.getItem(key)); 
localStorage.clear();
console.log(localStorage.getItem(key)); 
