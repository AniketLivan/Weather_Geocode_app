var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};
asyncAdd(5,7).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Should be a number', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//     resolve('Hey it worked!');
//     // reject('Unable to fulfill promise');
// },3000)});

// somePromise.then((message) => {
//     console.log('Sucess:', message);
// },(errorMessage)=>{
//     console.log('Error:', errorMessage);
// })};