let p = new Promise((resolve, reject)=>{
  let sum = 1+1;
  if(sum == 2){
    resolve('Success');
  }else{
    reject('Failed');
  }
});

p.then((message)=>{
  console.log('This is in the Then: ' + message);
}).catch((err)=>{
  console.log('This is in the Then: ' + err);
});