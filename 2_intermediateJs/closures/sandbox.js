/*
function makeTimer(doneMessage, n) {
  setTimeout(function() {
    console.log(doneMessage);
  }, n);

  doneMessage = "Changes";
}

makeTimer("Cookies are done!", 1000);
*/

//                MAGIC COUNTER
// ------------------------------------------------

function makeCounter() {
  var count = 0;

  function counter() {
    count = count + 1;
    return count;
  }

  return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());
