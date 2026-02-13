// console.log("hi there");

// let user = {
//     name: "Priaybrata",
//     age: 26
// }

// console.log(user.name + " is the new user and his age is " + user.age)

//Find sum from 1 to a number

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i<= n; i++){
//         ans = ans + i
//     }
//     return ans
// }

// console.log(sum(100))



// function sum(n){
//     let num = 0;
//     for(let i= 1; i<=n; i++){
//         num += i;
//     }
//     return num
// }

// console.log(sum(100))
// console.log(sum(1000))
// console.log(sum(10000))

// const fs = require("fs")

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents)


// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8")
// console.log(contents)



// const fs = require("fs");

// const cont = fs.readFileSync("a.txt", "utf-8")
// console.log(cont)


// const fs = require("fs");

// const content = fs.readFileSync("a.txt", "utf-8");
// console.log(content);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);


// let ans = 0;
// for (let i = 1; i <= 1000000; i++) {
// 	ans = ans + i
// }
// console.log(ans);	


function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(doOperation(1, 2, sum))

