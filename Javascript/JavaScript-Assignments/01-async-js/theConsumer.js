const myPromise = require('./theProducer')

console.log("Asking for Data....");

myPromise
    .then((data) => {
        console.log("Success", data);
    })
    .catch((error) => {
        console.log("Error", error);
    })
    .finally(() => {
        console.log("Cleanup Code");
    });

