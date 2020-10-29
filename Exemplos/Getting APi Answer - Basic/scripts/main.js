var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function bringAPI() {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1/`);
}
//UTILIZANDO PROMISE
// function showResult(){
//   const resposta = document.querySelector("#resposta");
//   bringAPI()
//     .then(Response => Response.json())
//   .then(data => {
//     if(data){
//       resposta.innerHTML = data.body
//     }else{
//       resposta.innerHTML = data.error;
//     }
//   })
//   .catch(err =>{
//     resposta.innerHTML = `Opps! ${err}`;
//   })
// }
//fazendo o mesmo que em cima usando o async/await
function showResult() {
    return __awaiter(this, void 0, void 0, function* () {
        const resposta = document.querySelector("#resposta");
        try {
            const apiAnswer = yield bringAPI();
            const data = yield apiAnswer.json();
            if (data) {
                resposta.innerHTML = data.title;
            }
            else {
                resposta.innerHTML = data.error;
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
showResult();
//# sourceMappingURL=main.js.map