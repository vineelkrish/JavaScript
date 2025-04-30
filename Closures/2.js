function delayedGreeter(names) {
    for (var i = 0; i < names.length; i++) {
      setTimeout(function() {
        console.log(`Hello, ${names[i]}!`);
      }, i * 1000);
    }
  }
  
  delayedGreeter(['Alice', 'Bob', 'Charlie']);
  
  // Expected output:
  // Hello, undefined!
  // Hello, undefined!
  // Hello, undefined!
  // This happens because `var` is function-scoped, and the variable `i` is shared across all iterations of the loop.
  // By the time the `setTimeout` callback executes, the loop has already completed, and `i` has the final value (names.length).
  // Since `names[i]` is out of bounds, it evaluates to `undefined`.

  function delayedGreeter(names) {
    for (var i = 0; i < names.length; i++) {
      (function(index) {
        setTimeout(function() {
          console.log(`Hello, ${names[index]}!`);
        }, index * 1000);
      })(i);
    }
  }
// Expected output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
// This happens because the IIFE (Immediately Invoked Function Expression) creates a new scope for each iteration of the loop.
// The `index` variable is unique to each iteration, so the correct value is used in the `setTimeout` callback.  

function delayedGreeterLet(names) {
  for (let i = 0; i < names.length; i++) { // Using 'let'
  setTimeout(function() {
  console.log(`Hello, ${names[i]}!`);
     }, i * 1000);
   }
  }
  delayedGreeterLet(['Alice', 'Bob', 'Charlie']);
  // Expected output (with delays):
  // Hello, Alice! (after 0 seconds)
  // Hello, Bob! (after 1 second)
  // Hello, Charlie! (after 2 seconds
//let creates a new binding for i in each iteration of the loop. Each setTimeout callback "captures" the correct value of i for that iteration because of block scoping.

