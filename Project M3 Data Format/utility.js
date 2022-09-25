export const generateRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(Math.random());
console.log(`Random Number generated from utility.js is: ${generateRandomNumber(10, 100)}`);