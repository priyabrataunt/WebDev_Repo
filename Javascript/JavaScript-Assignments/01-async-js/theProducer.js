const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if(success){
        resolve("Operation Successful!!")
    }else {
        reject("Operation Failed.")
    }
});

module.exports = myPromise;

