// A variable simply holds data/information
// We can create meaningful names for variables
// in order to make a formula or set of actions 
// read easily for other developers

// Pythagorean Theorem
// Which reads better?
// c^2 = a^2 + b^2;
// hypotenuseSquared = shortSideOne^2 + shortSideTwo^2; 
// TODO: find a better example

var myFirstVariable = 1;
/* var is function scoped */
/* function(){} */
/* 
Function scope meaning that the variable 
is only accessbile within the function that it was created in.

If the variable was not created in a function then this variable is */
// TODO: Create an example to demonstrate 
// the difference between let and var

// Variables declared with var do not have block scope. 
// Instead, they are scoped to the body of the containing 
// function no matter how deeply nested they are inside that 
// function.

let aBetterWayToCreateAVariable = 2;
/* let is block scoped {} */
// let is the preferred way to declare a variable

// TODO: Create an example to demonstrate 
// the difference between let and var

const aVarThatWillNotChange = 3.14;
/* const will not be able to change */
// ------- UNCOMMENT THE FOLLOWING LINES AND RUN WITH NODE -----
// aVarThatWillNotChange = 3.15;
// console.log(aVarThatWillNotChange);
// ------------------
