const doWorkCallBack = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined);
        callback(undefined, [1,4,7]);
    }, 2000)
}


doWorkCallBack((error, result) => {
    if(error){
        console.log(error);
    } else {
        console.log(result);
    }
});