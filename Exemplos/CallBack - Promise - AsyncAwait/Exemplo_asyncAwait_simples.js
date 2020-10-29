function bestRockBand(band){
  return new Promise((resolve, reject)=>{
    if (band == 'Queen'){
      resolve({
        success: true,
        bandName: band,
        msg: band + " Is the best rock band ever!"
      });
    }else{
      reject({
        success: false,
        mas: 'I\'m not so sure!'
      });
    }
  });
}

function bestRockSong(response){
  return new Promise((resolve, reject)=>{
    if(response.success){
      resolve('Bohemian Rhapsody by '+ response.bandName);
    }else{
      reject('Do you know Queen?');
    }
  });
}

/*
bestRockBand('Queen')
  .then(response => {
    console.log('Checking the answer...');
    return bestRockSong(response);
  })
  .then(response => {
    console.log("finding the best song...");
    console.log(response);
  })
  .catch(err => {
    console.log(err.msg);
  })
  */

//Aqui vai fazer o mesmo que de cima, só que com Async/await.
async function doTheJob(){
  try{
    const bestRockBandResponse = await bestRockBand('Queen');
    console.log(bestRockBandResponse);
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
    console.log(bestRockSongResponse);
  }catch(err){
    console.log(err);
  }
}
doTheJob();



