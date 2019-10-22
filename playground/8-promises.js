const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,1]);
        reject('Things went wrong!')
    }, 1500)
});

doWorkPromise.then((result) => {
    console.log('Succes!', result);
}).catch((error) => {
    console.log('Error!', error);
})