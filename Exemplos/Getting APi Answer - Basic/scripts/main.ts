function bringAPI(): any{
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
async function showResult() {
  const resposta = document.querySelector("#resposta");

  try{
    const apiAnswer = await bringAPI();
    const data = await apiAnswer.json();
    if(data){
      resposta.innerHTML = data.title;
    }else{
      resposta.innerHTML = data.error;
    }
  }catch(err){
    console.log(err);
  }
}



showResult();