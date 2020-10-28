// jshint esversion: 6
//                        Variable Scope
// -----------------------------------------------------
// The scope of a variable is the region of your program 
// source code in which the variable is defined.
//
//  Scope determines the accessibility (visibility) of variables.
//
// A global variable has a global scope; it is defined everywhere
// in your JavaScript Code. On the other hand, variables declared 
// within a function are defined only within the body of the function. 
// They are local variables and have local scope. Function parameters 
// also count as local variables and are defined only within the body 
// of the function.


//                       Global Vs Local
// -----------------------------------------------------
let scope = "global";

function checkscope() {
  let scope = "local";
  let onlyHere = "for sure local";
  return scope;
}

console.log(checkscope());  // `local`is logged to the console
console.log(scope);         // `global` is logged to the console
// console.log(onlyHere);      // `onlyHere` can not be logged

// In versions of JavaScript before ES6, the only way to 
// declare a variable is with the var keyword, and there is 
// no way to declare constants. The syntax of var is just 
// like the syntax of let:

// var x;
// var data = [], count = data.length;
// for(var i = 0; i < count; i++) console.log(data[i]);

// let y;
// let info = [], counter = info.length;
// for(let i = 0; i < counter; i++) console.log(info[i]);