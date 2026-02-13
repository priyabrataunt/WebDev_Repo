// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
const fs = require('fs');

fs.readFile("sample.txt", "utf-8", function(err, contents){
    if(err){
        console.log(err);
    }
    console.log(contents.split(' ').join(''));
    console.log("File read and removed spaces successfully!");

});

console.log("This file will run before reading the file as this is a asyncronous code.")