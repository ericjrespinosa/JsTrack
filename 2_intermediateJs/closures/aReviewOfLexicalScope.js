 // var justAVar= "Oh, don't you worry about it, I'm GLOBAL";

// function whereAreYou() {
//   var justAVar = "Just an every day LOCAL"; // SHADOW VARIABLE
//   return justAVar;
// }

// var result = whereAreYou();
// console.log(result);


/* NOW LET'S INTRODUCE A NESTED FUNCTION */


var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
  var justAVar = "Just an everyday LOCAL";

  function inner() {
    return justAVar;
  }
  return inner;
}

var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);

// 