console.log('Starting app');

setTimeout(() =>{
    console.log('Inside of Callback');
} ,2000);

setTimeout(() => {
    console.log('Inside of 2nd Callback');
},0);


console.log('Finishing up');