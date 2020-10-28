// FUNCTION EXERCISES

// Remember the syntax for a function is

// function nameOfFuntion(param1, param2) {
//    code block();
// }
//

// **************************************************** //
// #1 Write a function that adds two numbers together. 
// **************************************************** //
// function aFunctionToAddTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// aFunctionToAddTwoNumbers(1,2);
// **************************************************** //
// #2 Write a function that squares a number
// **************************************************** //
// function squaredNum(numToSquare) {
//   return numToSquare * numToSquare;
// }

// console.log(squaredNum(60));
// console.log(squaredNum(6));
// console.log(squaredNum(3));
// console.log(squaredNum(1));


// **************************************************** //
// #3 Write a function that cubes a number
// **************************************************** //
// function cube(numToCube) {
//   console.log(numToCube ** 3);
// }

// cube(3);
// **************************************************** //
// #4 Write a function that takes two arguments both numbers.
//    The first number will be raised to the power of the second number.
// **************************************************** //
// function raiseNumber(base,exponent) {
//   console.log(base ** exponent);
// }
// raiseNumber(4,4);
// **************************************************** //
// #5
// We are building an early feature for NASA. 
// This feature requires us to 
// create a function that finds
// the hypotenuse of a triangle.

// The formula to find the 
// hypotenuse is. 
// h^2  = a^2 + b^2 
// **************************************************** //
// function squaredNum(numToSquare) {
//   return numToSquare * numToSquare;
// }

// function getHypotenuse(sideOne, sideTwo) {
//   var hypotenuseSquare;
//   var aSquared = squaredNum(sideOne)
//   var bSquared = squaredNum(sideTwo)

//   hypotenuseSquare = aSquared + bSquared;
//   console.log(Math.sqrt(hypotenuseSquare));
// }

// getHypotenuse(9, 3);
// **************************************************** //
// #6 
// Write a function called isBoolean that takes in a boolean param, 
// meaning that when we pass in an argument it will be a true or false value. 
// If we pass in a truthy value we will print to the console “this is a truthy value”. 
// If we pass a falsy value we will print to the console “this is a falsy value”
// **************************************************** //
// function isBoolean(trueOrFalseValue) {
//   if (trueOrFalseValue) {
//     console.log("you passed in a true statement");
//   } else {
//     console.log("this value is false")
//   }
// }

// var password = "George";
// isBoolean("George" == password);

// **************************************************** //
// #7 
// Write a function that takes no parameters and only prints “Hello” to the console 100 times. 
// **************************************************** //

// **************************************************** //
// #8 
// Write a function that takes no parameters. 
// The function will prompt the user to enter the password. 
// The secret password is “password”.
// Prompt for success or failure
// **************************************************** //
// function secretPassword() {

//   var password; 

//   while (password != "password") {
//     password = prompt("Enter you password here", "airplane is a default value in our text box");

//     if(password == "password" ){
//       console.log("You got the password right!!");
//     } else {
//       console.log("try again");
//     }
//   }

// }

// secretPassword();


// until you get the correct password keep prompting the user 
// to enter the password

// **************************************************** //
// #9
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the 
// number and for the multiples of five print “Buzz”. For 
// numbers which are multiples of both three and five print 
// “FizzBuzz"
// **************************************************** //

// **************************************************** //
// #10
// create a function the changes the color of a blue box to 
// a red one `onClick`. This will require some html and css coding.
// **************************************************** //
// var box = document.getElementById("box");

// document.getElementById("box").addEventListener("click", changeColorTextAndSize); 

// function changeColorTextAndSize() {
//   document.getElementById("box").style.backgroundColor = "red"
//   document.getElementById("box").style.color = "white"
//   document.getElementById("box").style.fontSize = "300px"
// }

// **************************************************** //
// # 11
// Create a function that takes an array as a parameter 
// the function will return a new array with every other 
// element removed from the original
// /* [1,2,3,4,5,6,7,8,9,10] => [1,3,5,7,9] */

// function everyOther([somearray]) {
//   //your logic;
// }
// **************************************************** //
// let newArray = [1,2,3,4,5,6,7,8,9,10];

// function everyOther(array) {
//   let newArray = [];
//   array.forEach(function(item, index){
//     if (index % 2 == 0) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }

// let myNewArray = everyOther(newArray);

// console.log(myNewArray);

// console.log(everyOther([1,2,3,4,5,6,7]));
// console.log(everyOther(["Hanan","Presley","Eric","Charlie","Carlo"]));
// **************************************************** //
// # 12
// Create a function that takes an array as a parameter 
// the function will return a new array with each  
// element being incremented by two from the original
// /* [1,2,3,4,5,6,7,8,9,10] => [1,3,5,7,9] */

// function incrementTwo(somearray) {
//   //your logic;
//   return somearray.map(x => x + 2);
// }


// let upByTwo = incrementTwo([1,2,3,4,5,6,7,8,9,10]);
// console.log(upByTwo);
// **************************************************** //
// #13
// given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(stringParam) {
//   let array_arg =  stringParam.split(' ');
//   let max = Math.max(...array_arg);
//   let min = Math.min(...array_arg);
//   return max + " " + min;
// }

// // highAndLow("1 2 3 4 5");

// console.log(highAndLow("1 2 3 4 5 61 88 -2 55"));
// **************************************************** //
// #13
// Persistence
// Write a function, persistence, that takes in a positive parameter num and returns 
// its multiplicative persistence, which is the number of times you must multiply the 
// digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number
// **************************************************** //
// #14
// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only letters 
// is an isogram. Assume the empty string is an isogram. Ignore 
// letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
  let splitString = str.toLowerCase().split('');
  let isIso = true;
  let count = 0;

  splitString.forEach(element => {
    splitString.forEach(letter => {
      if(element === letter) {
        count++;
      }
      if(count > 1){
        isIso = false
      }
    });
    count = 0;
  });
  return isIso;
}

console.log(isIsogram("Dermatoglyphics")); 
console.log(isIsogram("aba")); 
console.log(isIsogram("moOse")); 
