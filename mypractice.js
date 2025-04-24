"use strict";

// const additionNumber = function (number1,number2){
//   const additionOperation = number1 + number2;
//   return additionOperation
// }

// console.log(additionNumber(8,8));

// console.log(typeof additionNumber)

// const fruits = ["apples", "bananas", "oranges"];
// const number = 64;
// console.log(Array.isArray(number))

// const additionNumber = function (number1,number2){
//   const additionOperation = number1 + number2;
//   return additionOperation
// }

// console.log(additionNumber(8,8).constructor);

// const fruits = ["apples", "bananas", "oranges"];
// console.log(fruits.constructor)

// const createFullName = function (firstName,lastName){
//   const fullName = `My name is ${firstName} ${lastName}`;
//   return fullName
// }

// console.log(additionNumber("Nastaran", "Minaei").constructor);

// const stringNumber = "64.64";

// const convertedToNumber = Number(stringNumber);
// console.log(convertedToNumber);

// const convertedToNumber = parseFloat(stringNumber);
// console.log(convertedToNumber);

// const convertedToNumber = parseInt(stringNumber);
// console.log(convertedToNumber);

// const number = 64.64565468;

// // const convertednUmberToString = String(number);
// // console.log(convertednUmberToString);

// // console.log(number.toString());

// // const saraAge = "Sara has" + " " +number;
// // console.log(saraAge);

// const convertedNumber = number.toFixed(7);

// const recentDate = new Date();

// const convertedDate = Number(recentDate);
// console.log(convertedDate);
// console.log(recentDate);

// throw

// const firstName; // syntax error

// lastName = "Minaei"; // reference error
// console.log(lastName)

// const age = 15; // typeerror
// age = 16;
// console.log(age)

const testError = function () {
  let i = 0;
  while (i <= 5) {
    try {
      if (i %2 !== 0){
        throw new Error("This is an odd number");
      }
      console.log("Even number")
    } catch (error) {
      console.error(error.stack);
    } finally {
      console.log("Great, I learnt try-catch-finally");
      i++;
    }
  }
};

testError();

// function customError (message){
//   this.message = message;
//   this.name = "Custom error";
//   this.stack = `${this.name}: ${this.message}`
// }
