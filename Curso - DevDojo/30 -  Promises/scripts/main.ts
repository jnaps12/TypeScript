let promise = new Promise((resolve, reject) => {
  // Opening the file
  let isOpened: boolean = true;
  if (isOpened) {
    resolve("Opened");
  } else {
    reject("Not Opened");
  }
});
//o 'then' é o sempre o caso de sucesso, quando ele tive sido completado com sucesso
// promise
//   .then((fromResolve) => {
//     console.log(fromResolve);
//   })
//   .catch((fromReject) => {
//     console.log(fromReject);
//   });

function openFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Opening the file
    let isOpened: boolean = true;
    if (isOpened) resolve("opened");
    reject("Not opened");
  });
}

function readFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Opening the file
    let isOpened: boolean = true;
    if (isOpened) resolve("read");
    reject("Not read");
  });
}

function deleteFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Opening the file
    let isOpened: boolean = true;
    if (isOpened) resolve("deleted");
    reject("Not deleted");
  });
}

openFile()
  .then(() => readFile()
    .then(() => deleteFile()
      .then(() => console.log("Ok"))
      .catch((frj)=>console.log(frj)))
  .catch((frj)=>console.log(frj)))
.catch((frj)=>console.log(frj));

Promise.all(([openFile(), readFile(), deleteFile()])).then().catch(); //lendo tudo de uma vez sem dependencia.
Promise.race([openFile(), readFile(), deleteFile()]).then().catch(); //exucutar todas paralelamente, 